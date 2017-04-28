import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from'@angular/router';

import {AppComponent} from './app.component';
import {IdNameComponent} from './shared/components/id-name/id-name.component';
import {NavMenuComponent} from './shared/components/nav-menu/nav-menu.component';
import {ChampionshipsComponent} from './championships/championships.component';
import {ChampionshipComponent} from './championship/championship.component';
import {ChampionshipsApiService} from './shared/service/api/championships-api-service';
import {SeasonApiService} from './shared/service/api/season-api-service';
import {SeriaApiService} from './shared/service/api/seria-api-service';
import {ConditionsApiService} from './shared/service/api/conditions-api-service';
import {ConditionTypeApiService} from './shared/service/api/condition-type-api-service';
import {ConditionTypesComponent} from './condition-types/condition-types.component';
import {NameDescriptionComponent} from './shared/components/name-description/name-description.component';
import {SeasonComponent} from './season/season.component';
import {SeriaComponent} from './seria/seria.component';
import {SportComponent} from './sport/sport.component';
import {SportsComponent} from './sports/sports.component';
import {SportsApiService} from './shared/service/api/sports-api-service';
import {AddNameDescriptionComponent} from './shared/components/add-name-description/add-name-description.component';
import {SportsSpecializationApiService} from './shared/service/api/sports-specialization-api-service';
import { SingleNameDescriptionComponent } from './shared/components/single-name-description/single-name-description.component';

@NgModule({
  declarations: [
    AppComponent,
    IdNameComponent,
    NavMenuComponent,
    ChampionshipsComponent,
    ChampionshipComponent,
    ConditionTypesComponent,
    NameDescriptionComponent,
    SeasonComponent,
    SeriaComponent,
    SportComponent,
    SportsComponent,
    AddNameDescriptionComponent,
    SingleNameDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'championships',
        pathMatch: 'full'
      },
      {
        path: 'championships',
        component: ChampionshipsComponent
      },
      {
        path: 'championship/:id',
        component: ChampionshipComponent
      },
      {
        path: 'condition-types',
        component: ConditionTypesComponent
      },
      {
        path: 'seasons',
        component: SeasonComponent
      },
      {
        path: 'serias',
        component: SeriaComponent
      },
      {
        path: 'sports',
        component: SportsComponent
      },
      {
        path: 'sport/:id',
        component: SportComponent
      }
    ])
  ],
  providers: [
    ChampionshipsApiService,
    SeasonApiService,
    SeriaApiService,
    ConditionsApiService,
    ConditionTypeApiService,
    SportsApiService,
    SportsSpecializationApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
