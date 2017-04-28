import {Observable} from 'rxjs/Rx';

import {ApiServiceBase} from './api-service-base';
import {Condition} from '../../model/condition';
import {ConditionType} from '../../model/condition-type';
import {IdName} from '../../model/id-name';
import {Message} from '../../model/message';
import {Pager} from '../../model/pager';

export class ConditionsApiService extends ApiServiceBase {
  private readonly GET_ALL_CONDITION_TYPE = 'condition/entity/all';
  private readonly GET_CURRENT_CONDITION_PAGE = 'condition/entity/page';
  private readonly GET_CONDITIONS_NAME_DESCRIPTION = 'condition/namedescription/all';
  private readonly GET_CONDITION_BY_ID = 'condition';
  private readonly GET_CONDITION_ID_NAME_ALL = 'condition/idname/all';

  private readonly POST_SAVE_CONDITION = 'condition/save';

  public getAllConditions(typeid: number): Observable<Condition[]> {
    return this.getById<Condition[]>(this.GET_ALL_CONDITION_TYPE, typeid);
  }

  public getCurrentConditionPage(typeid: number,
                                 order: string,
                                 offset: number,
                                 limit: number): Observable<Pager<Condition>> {
    return this.getPage<Condition>(this.GET_CURRENT_CONDITION_PAGE, order, offset, limit, typeid);
  }

  public getConditionTypeNameDescription(typeid: number): Observable<ConditionType> {
    return this.getById<ConditionType>(this.GET_CONDITIONS_NAME_DESCRIPTION, typeid);
  }

  public getConditionById(typeid: number): Observable<Condition> {
    return this.getById<Condition>(this.GET_CONDITION_BY_ID, typeid);
  }

  public getConditionsAllIdName(typeid: number): Observable<IdName[]> {
    return this.getById<IdName[]>(this.GET_CONDITION_ID_NAME_ALL, typeid);
  }

  public saveCondition(minimum: string,
                       maximum: string,
                       equal: string,
                       name: string,
                       description: string,
                       typeid: number,
                       sportid: number): Observable<Message> {
    return this.post(this.POST_SAVE_CONDITION,
      {
        minimum: minimum,
        maximum: maximum,
        equal: equal,
        name: name,
        description: description,
        typeid: typeid,
        sportid: sportid
      });
  }
}
