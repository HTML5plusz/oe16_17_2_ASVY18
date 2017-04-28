import {Observable} from 'rxjs/Rx';

import {ApiServiceBase} from './api-service-base';
import {IdName} from '../../model/id-name';
import {Message} from '../../model/message';
import {NameDescription} from '../../model/name-description';
import {Pager} from '../../model/pager';
import {Sport} from '../../model/sport';

export class SportsApiService extends ApiServiceBase {
  private readonly GET_ALL_SPORT = 'sport/entity/all';
  private readonly GET_CURRENT_SPORT_PAGE = 'sport/entity/page';
  private readonly GET_ALL_SPORT_NAME_DESCRIPTION = 'sport/namedescription/all';
  private readonly GET_SPORT_BY_ID = 'sport';
  private readonly GET_ALL_SPORT_ID_NAME = 'sport/idname/all';

  private readonly POST_SAVE_SPORT = 'sport/save';

  public getAllSport(): Observable<Sport[]> {
    return this.getAll<Sport[]>(this.GET_ALL_SPORT);
  }

  public getCurrentSportPage(order: string,
                             offset: number,
                             limit: number): Observable<Pager<Sport[]>> {
    return this.getPage<Sport[]>(this.GET_CURRENT_SPORT_PAGE, order, offset, limit);
  }

  public getAllSportNameDescription(): Observable<NameDescription[]> {
    return this.getAll<NameDescription[]>(this.GET_ALL_SPORT_NAME_DESCRIPTION);
  }

  public getSportById(id: number): Observable<Sport> {
    return this.getById<Sport>(this.GET_SPORT_BY_ID, id);
  }

  public getAllSportIdName(): Observable<IdName[]> {
    return this.getAll<IdName[]>(this.GET_ALL_SPORT_ID_NAME);
  }

  public saveSport(name: string, description: string): Observable<Message> {
    return this.post(this.POST_SAVE_SPORT, {name: name, description: description});
  }
}
