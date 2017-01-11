import {Component, Output, EventEmitter, Renderer, Input, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'search-bar',
  template: require('./SearchBar.html')
})
export class SearchBarComponent implements AfterViewInit {

  @ViewChild('myInput') input: ElementRef;
  @Output() onSave: EventEmitter<any> = new EventEmitter(false);
  @Input() text: string = '';

  constructor(private renderer: Renderer) {}

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus', []);
  }

  handleSubmit(e: any) {
    if (e.keyCode === 13) {
      this.onSave.emit(this.text);
    }
  }
}
