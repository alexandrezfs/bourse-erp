import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing, RootComponent} from "./routes";
import {store} from "./reducers";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppComponent} from "./containers/App";
import {SearchBarComponent} from "./components/searcher/SearchBar";
import {TransactionService} from "./services/TransactionService";
import {SoldProductService} from "./services/SoldProductService";
import {SearcherComponent} from "./containers/Searcher";
import {SearchResults} from "./components/searcher/SoldProductSearchResults";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    store,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [
    TransactionService,
    SoldProductService
  ],
  declarations: [
    RootComponent,
    AppComponent,
    SearchBarComponent,
    SearcherComponent,
    SearchResults
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
