import {Component, Input} from '@angular/core';

@Component({
  selector: 'name-description',
  templateUrl: './name-description.component.html',
})
export class NameDescriptionComponent {
  @Input() list: any;
  @Input() component: string;
}
