import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {Sport} from '../shared/model/sport';
import {SportsApiService} from '../shared/service/api/sports-api-service';
import {ActivatedRoute} from '@angular/router';
import {IdName} from '../shared/model/id-name';
import {SportsSpecializationApiService} from '../shared/service/api/sports-specialization-api-service';
import {NameDescription} from '../shared/model/name-description';

@Component({
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  private subscription: Subscription;
  public sport: Sport;
  public specializations: Observable<IdName[]>;

  constructor(private sportsApi: SportsApiService,
              private sportsSpecApi: SportsSpecializationApiService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: number;

    this.subscription = this.route.params
      .subscribe(params => {
        id = +params['id'];
      })

    this.sportsApi
      .getSportById(id)
      .subscribe(res => this.sport = res);

    this.specializations = this.sportsSpecApi
      .getAllSportSpecIdName(id);
  }

  public addNewCondition(event: NameDescription): void {
    let message: string;

    this.sportsApi.saveSport(event.name, event.description)
      .subscribe(res => message = res.message);

    alert(message);
  }
}
