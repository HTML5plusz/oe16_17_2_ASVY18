import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {ConditionTypeApiService} from '../shared/service/api/condition-type-api-service';
import {ConditionType} from '../shared/model/condition-type';
import {NameDescription} from '../shared/model/name-description';

@Component({
  templateUrl: './condition-types.component.html',
})
export class ConditionTypesComponent implements OnInit {
  public conditionTypeList: Observable<ConditionType[]>;
  public componentName: string;

  constructor(private api: ConditionTypeApiService) {
    this.componentName = 'Condition Types';
  }

  ngOnInit() {
    this.conditionTypeList = this.api
      .getAllConditionType();
  }

  public addNewCondition(event: NameDescription): void {
    let message: string;

    this.api.saveConditionType(event.name, event.description)
      .subscribe(res => message = res.message);

    alert(message);
  }

}
