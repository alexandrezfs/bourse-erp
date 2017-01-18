import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing, RootComponent} from "./routes";
import {store} from "./reducers";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppComponent} from "./containers/App";
import {SearchBarComponent} from "./components/SearchBar";
import {DisplayTextComponent} from "./components/DisplayTextComponent";
import {TransactionService} from "./services/TransactionService";
import {SoldProductService} from "./services/SoldProductService";

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
    DisplayTextComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
