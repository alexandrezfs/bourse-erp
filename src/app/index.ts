import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing, RootComponent} from './routes';
import {store} from './reducers';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './containers/App';
import {FooterComponent} from './components/Footer';
import {HeaderComponent} from './components/Header';
import {MainSectionComponent} from './components/MainSection';
import {TodoItemComponent} from './components/TodoItem';
import {TodoTextInputComponent} from './components/TodoTextInput';
import {SearchBarComponent} from './components/SearchBar';
import {DisplayTextComponent} from './components/DisplayTextComponent';
import {TransactionService} from './services/TransactionService';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    store,
    NgbModule.forRoot()
  ],
  providers: [
    TransactionService
  ],
  declarations: [
    RootComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainSectionComponent,
    TodoItemComponent,
    TodoTextInputComponent,
    SearchBarComponent,
    DisplayTextComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
