import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {IdName} from '../../model/id-name';

@Component({
  selector: 'id-name',
  templateUrl: './id-name.component.html',
})
export class IdNameComponent implements OnInit {
  @Input() idNames: Observable<IdName[]>;
  @Input() link: string;

  constructor() {
  }

  ngOnInit() {
  }
}
