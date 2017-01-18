import {Component, Input, OnChanges} from "@angular/core";
import {SoldProductService} from "../services/SoldProductService";
import {SoldProduct} from "../entities/SoldProduct";

@Component({
  selector: 'display-text',
  template: require('./DisplayTextComponent.html')
})
export class DisplayTextComponent implements OnChanges {

  @Input() keyword: string = '';
  soldProducts: SoldProduct[];

  constructor(private soldProductService: SoldProductService) {}

  ngOnChanges(changes) {
    if(changes.keyword.currentValue != changes.keyword.previousValue && this.keyword.length > 0) {

      this.soldProductService.getSoldProductAnyKeyword(this.keyword)
        .subscribe(
          soldProducts => this.soldProducts = soldProducts, //Bind to view
          err => {
            console.log(err);
          });
    }
  }
}
