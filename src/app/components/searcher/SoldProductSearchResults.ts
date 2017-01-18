import {Component, Input, OnChanges} from "@angular/core";
import {SoldProductService} from "../../services/SoldProductService";
import {SoldProduct} from "../../entities/SoldProduct";
import {SEARCH_TYPE_SOLD_PRODUCTS} from "../../constants/SearchTypes";

@Component({
  selector: 'sold-products-search-results',
  template: require('./SoldProductSearchResults.html')
})
export class SoldProductSearchResults implements OnChanges {

  @Input() keyword: string = '';
  @Input() searchType: string;
  soldProducts: SoldProduct[];

  constructor(private soldProductService: SoldProductService) {}

  ngOnChanges(changes) {

    if (this.keyword && this.keyword.length > 0) {

      if (this.searchType == SEARCH_TYPE_SOLD_PRODUCTS) {

        this.soldProductService.getSoldProductAnyKeyword(this.keyword)
          .subscribe(
            soldProducts => this.soldProducts = soldProducts, //Bind to view
            err => {
              console.log(err);
            });
      }

    }

  }
}
