import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ChampionshipsApiService} from '../shared/service/api/championships-api-service';
import {Championship} from '../shared/model/championship';
import {Observable, Subscription} from 'rxjs/Rx';
import {NameDescription} from '../shared/model/name-description';

@Component({
  templateUrl: './championship.component.html',
})
export class ChampionshipComponent implements OnInit {
  public championship: Observable<Championship>;
  public championshipIdName: Observable<NameDescription>;
  public championshipSeria: Observable<NameDescription>;
  public championshipSeason: Observable<NameDescription>;
  private subscription: Subscription;
  private id: number;

  constructor(private api: ChampionshipsApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(params => {
        this.id = +params['id'];
      });

    this.championship = this.api
      .getChampionshipById(this.id);

    this.championshipIdName = this.championship
      .map(res => <NameDescription>{name: res.name, description: res.description});

    this.championshipSeria = this.championship
      .map(res => <NameDescription>{name: res.name, description: res.description});

    this.championshipSeason = this.championship
      .map(res => <NameDescription>{name: res.name, description: res.description});
  }
}
