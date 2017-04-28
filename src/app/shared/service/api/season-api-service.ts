import {Observable} from 'rxjs/Rx';

import {ApiServiceBase} from './api-service-base';
import {IdName} from '../../model/id-name';
import {Message} from '../../model/message';
import {NameDescription} from '../../model/name-description';
import {Pager} from '../../model/pager';
import {Season} from '../../model/season';

export class SeasonApiService extends ApiServiceBase {
  private readonly GET_ALL_SEASON = 'season/entity/all';
  private readonly GET_CURRENT_SEASON_PAGE = 'season/entity/page';
  private readonly GET_ALL_SEASON_NAME_DESCRIPTION = 'season/namedescription/all';
  private readonly GET_SEASON_BY_ID = 'season';
  private readonly GET_ALL_SEASON_ID_NAME = 'season/idname/all';

  private readonly POST_SAVE_SEASON = 'season/save';

  public getAllSeasion(): Observable<Season[]> {
    return this.getAll<Season[]>(this.GET_ALL_SEASON);
  }

  public getCurrentSeasionPage(order: string,
                               offset: number,
                               limit: number): Observable<Pager<Season[]>> {
    return this.getPage<Season[]>(this.GET_CURRENT_SEASON_PAGE, order, offset, limit);
  }

  public getAllSeasonNameDescription(): Observable<NameDescription[]> {
    return this.getAll<NameDescription[]>(this.GET_ALL_SEASON_NAME_DESCRIPTION);
  }

  public getSeasonById(id: number): Observable<Season> {
    return this.getById<Season>(this.GET_SEASON_BY_ID, id);
  }

  public getAllSeasonIdName(): Observable<IdName[]> {
    return this.getAll<IdName[]>(this.GET_ALL_SEASON_ID_NAME);
  }

  public saveSeason(name: string, description: string): Observable<Message> {
    return this.post(this.POST_SAVE_SEASON, {name: name, description: description});
  }
}
