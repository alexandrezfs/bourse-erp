import {Component, Output, EventEmitter} from "@angular/core";
import {Store} from "@ngrx/store";
import * as actions from "../actions/index";

@Component({
  selector: 'fountain-app',
  template: require('./App.html')
})
export class AppComponent {

  text: string = '';

  constructor(public store: Store<any[]>) {

  }

  handleSave(text: string) {
    this.text = text;
    this.store.dispatch(actions.addText(text));
  }

}
