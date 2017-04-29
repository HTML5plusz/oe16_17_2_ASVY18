import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {IdName} from '../shared/model/id-name';
import {SportsApiService} from '../shared/service/api/sports-api-service';
import {NameDescription} from '../shared/model/name-description';

@Component({
  templateUrl: './sports.component.html',
})
export class SportsComponent implements OnInit {
  public sportsList: Observable<IdName[]>;

  constructor(private sportsApi: SportsApiService) {
  }

  ngOnInit() {
    this.sportsList = this.sportsApi
      .getAllSportIdName();
  }

  public addNewSport(event: NameDescription): void {
    let message: string;

    this.sportsApi.saveSport(event.name, event.description)
      .subscribe(res => message = res.message);

    alert(message);
  }

}
