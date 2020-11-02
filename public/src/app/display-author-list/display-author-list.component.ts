import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../quote.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-display-author-list',
  templateUrl: './display-author-list.component.html',
  styleUrls: ['./display-author-list.component.css']
})
export class DisplayAuthorListComponent implements OnInit {
  authors: any = [];

  constructor(
    private _quote: QuoteService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAuthors()
  }
  getAuthors(){
    const observable = this._quote.getAuthors()
    observable.subscribe(data => this.authors = data)
  }
  viewQuotes(id) {
    this._router.navigate(['/author/'+id])
  }
  editAuthor(id) {
    this._router.navigate(['/edit/' + id])
  }
}
