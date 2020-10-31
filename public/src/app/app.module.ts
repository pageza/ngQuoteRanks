import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayAuthorListComponent } from './display-author-list/display-author-list.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AuthorQuotesComponent } from './author-quotes/author-quotes.component';
import { AddAuthorQuoteComponent } from './add-author-quote/add-author-quote.component';
import { QuoteService} from './quote.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAuthorListComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    AuthorQuotesComponent,
    AddAuthorQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
