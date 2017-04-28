import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs';

import {IdName} from '../../model/id-name';

@Component({
  selector: 'id-name',
  templateUrl: './id-name.component.html',
  styleUrls: ['./id-name.component.css']
})
export class IdNameComponent implements OnInit {
  @Input() idNames: Observable<IdName[]>
  @Input() link: string;

  constructor() {
  }

  ngOnInit() {
  }
}
