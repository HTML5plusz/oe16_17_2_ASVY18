import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {ChampionshipsApiService} from '../shared/service/api/championships-api-service';
import {IdName} from '../shared/model/id-name';
import {SeasonApiService} from '../shared/service/api/season-api-service';
import {SeriaApiService} from '../shared/service/api/seria-api-service';
import {ConditionsApiService} from '../shared/service/api/conditions-api-service';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
})
export class ChampionshipsComponent implements OnInit {
  public championshipList: Observable<IdName[]>;
  public seasonList: Observable<IdName[]>;
  public seriaList: Observable<IdName[]>;
  public conditionList: Observable<IdName[]>;
  public conditionid: number;
  public seriaid: number;
  public seasonid: number;

  constructor(private championshipsApi: ChampionshipsApiService,
              private seasonsApi: SeasonApiService,
              private seriaApi: SeriaApiService,
              private conditionApi: ConditionsApiService) {
  }

  ngOnInit() {
    this.championshipList = this.championshipsApi
      .getAllChampionshipsIdName();

    this.seasonList = this.seasonsApi
      .getAllSeasonIdName();

    this.seriaList = this.seriaApi
      .getAllSeriaIdName();

    this.conditionList = this.conditionApi
      .getConditionsAllIdName(1);
  }

  public addNewChampionship(name: string,
                            description: string,
                            startDate: string,
                            endDate: string) {
    let message = this.championshipsApi
      .saveChampionship(name, description, startDate, endDate, this.seasonid, this.seriaid, [this.conditionid]);

    alert(message);
  }

}
