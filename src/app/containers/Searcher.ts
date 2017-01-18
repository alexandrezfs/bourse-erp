import {Component} from "@angular/core";

@Component({
  selector: 'searcher-app',
  template: require('./Searcher.html')
})
export class SearcherComponent {

  keyword: string = '';
  searchType: string = '';

  constructor() {}

  handleSave(parameters) {
    this.keyword = parameters.keyword;
    this.searchType = parameters.searchType;
  }

}
