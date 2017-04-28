import {Observable} from 'rxjs/Rx';

import {ApiServiceBase} from './api-service-base';
import {IdName} from '../../model/id-name';
import {Message} from '../../model/message';
import {NameDescription} from '../../model/name-description';
import {SportSpecialization} from '../../model/sport-specialization';

export class SportsSpecializationApiService extends ApiServiceBase {
  private readonly GET_ALL_SPORTSPEC = 'sportspecialization/entity';
  private readonly GET_ALL_SPORTSPEC_NAME_DESCRIPTION = 'sportspecialization/namedescription';
  private readonly GET_ALL_SPORTSPEC_ID_NAME = 'sportspecialization/idname';
  private readonly POST_SAVE_SPORTSPEC = 'sportspecialization/save';

  public getAllSportSpec(sportid: number): Observable<SportSpecialization[]> {
    return this.getById<SportSpecialization[]>(this.GET_ALL_SPORTSPEC, sportid);
  }

  public getAllSportSpecNameDescription(): Observable<NameDescription[]> {
    return this.getAll<NameDescription[]>(this.GET_ALL_SPORTSPEC_NAME_DESCRIPTION);
  }

  public getAllSportSpecIdName(id: number): Observable<IdName[]> {
    return this.getById<IdName[]>(this.GET_ALL_SPORTSPEC_ID_NAME, id);
  }

  public saveSportSpec(name: string,
                       description: string,
                       parendid: number): Observable<Message> {
    return this.post(this.POST_SAVE_SPORTSPEC,
      {
        name: name,
        description: description,
        parendid: parendid
      });
  }
}
