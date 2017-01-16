import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'display-text',
  template: require('./DisplayTextComponent.html')
})
export class DisplayTextComponent {

  @Input() text: string = '';

}
