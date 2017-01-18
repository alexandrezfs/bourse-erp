import {Component, Output, EventEmitter, Renderer, Input, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {SEARCH_TYPES} from '../../constants/SearchTypes';

@Component({
  selector: 'search-bar',
  template: require('./SearchBar.html')
})
export class SearchBarComponent implements AfterViewInit {

  @ViewChild('myInput') input: ElementRef;
  @Output() onSave: EventEmitter<any> = new EventEmitter(false);
  searchTypes: any[];
  keyword: string;
  searchType: string;

  constructor(private renderer: Renderer) {
    this.searchTypes = SEARCH_TYPES;
    this.searchType = this.searchTypes[0].name;
  }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus', []);
  }

  handleSubmit(e: any) {
    if (e.keyCode === 13) {
      this.onSave.emit({
        keyword: this.keyword,
        searchType: this.searchType
      });
    }
  }
}
