import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { QuoteService } from "../quote.service";

@Component({
  selector: 'app-author-quotes',
  templateUrl: './author-quotes.component.html',
  styleUrls: ['./author-quotes.component.css']
})
export class AuthorQuotesComponent implements OnInit {
  author: any;
  params: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _quote: QuoteService
  ) { }

  ngOnInit() {
    this._route.params.subscribe( params => this.params = params)
    this.getAuthor(this.params)
  }
  getAuthor(id) {
    const observable = this._quote.getOneAuthor(id.id)
    observable.subscribe( data => this.author = data)
  }
  voteUp(quote, author) {
    quote.vote += 1
    let body = {'quote': quote, 'author': author}
    const observable = this._quote.vote(body)
    observable.subscribe( data => console.log(data))
  }
  voteDown(quote, author) {
    quote.vote -= 1
    let body = {'quote': quote, 'author': author}
    const observable = this._quote.vote(body)
    observable.subscribe( data => console.log(data))
  }
  deleteQuote(quote, author) {
    let body = {'quote': quote, 'author': author}
    const observable = this._quote.deleteQuote(body)
    observable.subscribe( data => console.log(data))
    this.ngOnInit()
  }
  goHome() {
    this._router.navigate(['/'])
  }
}
