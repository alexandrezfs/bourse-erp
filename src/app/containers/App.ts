import {Component, Output, EventEmitter} from "@angular/core";
import {Store} from "@ngrx/store";
import * as actions from "../actions/index";

@Component({
  selector: 'fountain-app',
  template: require('./App.html')
})
export class AppComponent {

  keyword: string = '';

  constructor(public store: Store<any[]>) {

  }

  handleSave(keyword: string) {
    this.keyword = keyword;
    this.store.dispatch(actions.addText(keyword));
  }

}
