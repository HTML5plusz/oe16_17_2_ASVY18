import {Component, OnInit} from '@angular/core';
import {SeriaApiService} from '../shared/service/api/seria-api-service';
import {Observable} from 'rxjs';
import {Seria} from '../shared/model/seria';
import {NameDescription} from '../shared/model/name-description';

@Component({
  templateUrl: './seria.component.html',
  styleUrls: ['./seria.component.css']
})
export class SeriaComponent implements OnInit {
  public seriaList: Observable<Seria[]>;
  public componentName: string;

  constructor(private api: SeriaApiService) {
    this.componentName = 'Serias';
  }

  ngOnInit() {
    this.seriaList = this.api
      .getAllSeria();
  }

  public addNewSeria(event: NameDescription): void {
    let message: string;

    this.api.saveSeria(event.name, event.description)
      .subscribe(res => message = res.message);

    alert(message);
  }
}
