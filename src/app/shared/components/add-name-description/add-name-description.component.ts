import {Component, EventEmitter, Input, Output} from '@angular/core';

import {NameDescription} from '../../model/name-description';

@Component({
  selector: 'add-name-description',
  templateUrl: './add-name-description.component.html',
})
export class AddNameDescriptionComponent {
  @Input() component: string;
  @Output() onSubmit: EventEmitter<NameDescription> = new EventEmitter();

  public submit(name: string, description: string): void {
    this.onSubmit.emit(<NameDescription>{name: name, description: description});
  }
}
