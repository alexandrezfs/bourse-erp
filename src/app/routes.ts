import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './containers/App';
import {SearcherComponent} from './containers/Searcher';

@Component({
  selector: 'bourse-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'searcher',
    component: SearcherComponent
  }
];

export const routing = RouterModule.forRoot(routes);
