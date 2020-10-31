import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { DisplayAuthorListComponent} from './display-author-list/display-author-list.component';
import { AuthorQuotesComponent } from "./author-quotes/author-quotes.component";


const routes: Routes = [
  {path: '', component: DisplayAuthorListComponent },
  {path: 'author', component: AddAuthorComponent },
  {path: 'author/:id', component: AuthorQuotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
