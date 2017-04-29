import {Observable} from 'rxjs/Rx';

import {ApiServiceBase} from './api-service-base';
import {IdName} from '../../model/id-name';
import {Message} from '../../model/message';
import {NameDescription} from '../../model/name-description';
import {Pager} from '../../model/pager';
import {Seria} from '../../model/seria';

export class SeriaApiService extends ApiServiceBase {
  private readonly GET_ALL_SERIA = 'seria/entity/all';
  private readonly GET_CURRENT_SERIA_PAGE = 'seria/entity/page';
  private readonly GET_ALL_SERIA_NAME_DESCRIPTION = 'seria/namedescription/all';
  private readonly GET_SERIA_BY_ID = 'seria';
  private readonly GET_ALL_SERIA_ID_NAME = 'seria/idname/all';

  private readonly POST_SAVE_SERIA = 'seria/save';

  public getAllSeria(): Observable<Seria[]> {
    return this.getAll<Seria[]>(this.GET_ALL_SERIA);
  }

  public getCurrentSeriaPage(order: string,
                             offset: number,
                             limit: number): Observable<Pager<Seria[]>> {
    return this.getPage<Seria[]>(this.GET_CURRENT_SERIA_PAGE, order, offset, limit);
  }

  public getAllSeriaNameDescription(): Observable<NameDescription[]> {
    return this.getAll<NameDescription[]>(this.GET_ALL_SERIA_NAME_DESCRIPTION);
  }

  public getSeriaById(id: number): Observable<Seria> {
    return this.getById<Seria>(this.GET_SERIA_BY_ID, id);
  }

  public getAllSeriaIdName(): Observable<IdName[]> {
    return this.getAll<IdName[]>(this.GET_ALL_SERIA_ID_NAME);
  }

  public saveSeria(name: string, description: string): Observable<Message> {
    return this.post(this.POST_SAVE_SERIA, {name: name, description: description});
  }
}
