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
  voteUp(quote) {
    // TODO: figure out how to send both author id and quote id to the service
    quote.vote += 1
    quote.author.id = this.author._id
    console.log(quote)
    const observable = this._quote.voteUp(quote)
    observable.subscribe( data => console.log(data))
  }
  voteDown(quote) {
    // TODO: figure out how to send both author id and quote id to the service
    quote.vote -= 1
    const observable = this._quote.voteDown(quote)
    observable.subscribe( data => console.log(data))
  }
  deleteQuote(quote) {
    // TODO: figure out how to send both author id and quote id to the service
    const observable = this._quote.deleteQuote(quote)
    observable.subscribe( data => console.log(data))
  }
  goHome() {
    this._router.navigate(['/'])
  }
}
