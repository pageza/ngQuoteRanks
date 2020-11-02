import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { DisplayAuthorListComponent} from './display-author-list/display-author-list.component';
import { AuthorQuotesComponent } from "./author-quotes/author-quotes.component";
import { EditAuthorComponent } from "./edit-author/edit-author.component";
import { AddAuthorQuoteComponent } from "./add-author-quote/add-author-quote.component";


const routes: Routes = [
  {path: '', component: DisplayAuthorListComponent },
  {path: 'author', component: AddAuthorComponent },
  {path: 'author/:id', component: AuthorQuotesComponent},
  {path: 'edit/:id', component: EditAuthorComponent},
  {path: 'quote/author/:id', component: AddAuthorQuoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
