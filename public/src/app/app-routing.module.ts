import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { DisplayAuthorListComponent} from './display-author-list/display-author-list.component';


const routes: Routes = [
  {path: '', component: DisplayAuthorListComponent },
  {path: 'author', component: AddAuthorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
