import {Observable} from 'rxjs/Rx';

import {ApiServiceBase} from './api-service-base';
import {ConditionType} from '../../model/condition-type';
import {IdName} from '../../model/id-name';
import {Message} from '../../model/message';
import {NameDescription} from '../../model/name-description';
import {Pager} from '../../model/pager';

export class ConditionTypeApiService extends ApiServiceBase {
  private readonly GET_ALL_CONDITION_TYPE = 'conditiontype/entity/all';
  private readonly GET_CURRENT_CONDITION_TYPE_PAGE = 'conditiontype/entity/page';
  private readonly GET_ALL_CONDITION_TYPE_NAME_DESCRIPTION = 'conditiontype/namedescription/all';
  private readonly GET_CONDITION_TYPE_BY_ID = 'conditiontype';
  private readonly GET_ALL_CONDITION_TYPE_ID_NAME = 'conditiontype/idname/all';

  private readonly POST_SAVE_CONDITIONTYPE = 'conditiontype/save';

  public getAllConditionType(): Observable<ConditionType[]> {
    return this.getAll<ConditionType[]>(this.GET_ALL_CONDITION_TYPE);
  }

  public gegCurrentConditionTypePage(order: string,
                                     offset: number,
                                     limit: number): Observable<Pager<ConditionType[]>> {
    return this.getPage<ConditionType[]>(this.GET_CURRENT_CONDITION_TYPE_PAGE, order, offset, limit);
  }

  public getAllConditionTypeNameDescription(): Observable<NameDescription[]> {
    return this.getAll<NameDescription[]>(this.GET_ALL_CONDITION_TYPE_NAME_DESCRIPTION);
  }

  public getConditionTypeById(id: number): Observable<ConditionType> {
    return this.getById<ConditionType>(this.GET_CONDITION_TYPE_BY_ID, id);
  }

  public getALlConditionTypeIdName(): Observable<IdName[]> {
    return this.getAll<IdName[]>(this.GET_ALL_CONDITION_TYPE_ID_NAME);
  }

  public saveConditionType(name: string, description: string): Observable<Message> {
    return this.post(this.POST_SAVE_CONDITIONTYPE, {name: name, description: description});
  }
}
