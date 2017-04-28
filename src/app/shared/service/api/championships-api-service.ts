import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {ApiServiceBase} from './api-service-base';
import {Championship} from '../../model/championship';
import {IdName} from '../../model/id-name';
import {Message} from '../../model/message';
import {NameDescription} from '../../model/name-description';

@Injectable()
export class ChampionshipsApiService extends ApiServiceBase {
  private readonly GET_CHAMPIONSHIP_BY_ID = 'championship';
  private readonly GET_ALL_CHAMPIONSHIPS = 'championship/entity/all';
  private readonly GET_ALL_CHAMPIONSHIPS_ID_NAME = 'championship/idname/all';
  private readonly GET_CHAMPIONSHIP_EVENTS_ID_NAME = 'championship/events/idname';
  private readonly GET_ALL_CHAMPIONSHIPS_NAME_DESCRIPTION = 'championship/namedescription/all';

  private readonly POST_ADD_ROUND = 'championship/addround';
  private readonly POST_ADD_SPORT = 'championship/addsport';
  private readonly POST_SAVE_CHAMPIONSHIP = 'championship/save';

  public getAllChampionships(): Observable<Championship[]> {
    return this.getAll(this.GET_ALL_CHAMPIONSHIPS);
  }

  public getChampionshipEventsIdName(championshipid: number): Observable<IdName> {
    return this.getById<IdName>(this.GET_CHAMPIONSHIP_EVENTS_ID_NAME, championshipid);
  }

  public getAllChampionshipsNameDescription(): Observable<NameDescription[]> {
    return this.getAll<Championship[]>(this.GET_ALL_CHAMPIONSHIPS_NAME_DESCRIPTION);
  }

  public getChampionshipById(id: number): Observable<Championship> {
    return this.getById<Championship>(this.GET_CHAMPIONSHIP_BY_ID, id);
  }

  public getAllChampionshipsIdName(): Observable<IdName[]> {
    return this.getAll<IdName[]>(this.GET_ALL_CHAMPIONSHIPS_ID_NAME);
  }

  public addRound(eventid: number,
                  name: string,
                  description: string): Observable<Message> {

    return this.post(this.POST_ADD_ROUND,
      {
        eventid: eventid,
        name: name,
        description: description
      });
  }

  public addSport(championshipid: number,
                  sportid: number,
                  specializationid: number[],
                  conditionid: number[]): Observable<Message> {

    return this.post(this.POST_ADD_SPORT,
      {
        championshipid: championshipid,
        sportid: sportid,
        specializationid: specializationid,
        conditionid: conditionid
      });
  }

  public saveChampionship(name: string,
                          description: string,
                          startDate: string,
                          endDate: string,
                          seasionid: number,
                          seriaid: number,
                          conditionid: number[]): Observable<Message> {

    return this.post(this.POST_SAVE_CHAMPIONSHIP,
      {
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
        seasionid: seasionid,
        seriaid: seriaid,
        conditionid: conditionid
      });
  }
}
