import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {SeasonApiService} from '../shared/service/api/season-api-service';
import {Season} from '../shared/model/season';
import {NameDescription} from '../shared/model/name-description';

@Component({
  templateUrl: './season.component.html',
})
export class SeasonComponent implements OnInit {
  public seasonList: Observable<Season[]>;
  public componentName: string;

  constructor(private api: SeasonApiService) {
    this.componentName = 'Seasons';
  }

  ngOnInit() {
    this.seasonList = this.api
      .getAllSeasion();
  }

  public addNewCondition(event: NameDescription): void {
    let message: string;

    this.api.saveSeason(event.name, event.description)
      .subscribe(res => message = res.message);

    alert(message);
  }
}
