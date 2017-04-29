import {Component, Input} from '@angular/core';

import {NameDescription} from '../../model/name-description';

@Component({
  selector: 'single-name-description',
  templateUrl: './single-name-description.component.html',
})
export class SingleNameDescriptionComponent {
  @Input() title?: string;
  @Input() nameDescription: NameDescription;
}
