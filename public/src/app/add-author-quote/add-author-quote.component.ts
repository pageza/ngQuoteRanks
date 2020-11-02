import { Component, OnInit } from '@angular/core';
import { QuoteService} from "../quote.service";
import { ActivatedRoute, Router} from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-add-author-quote',
  templateUrl: './add-author-quote.component.html',
  styleUrls: ['./add-author-quote.component.css']
})
export class AddAuthorQuoteComponent implements OnInit {
  params: any;
  author: any;
  quote: any = { quote: '', id: ''}

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    private _quote: QuoteService
  ) { }

  ngOnInit() {
    this._route.params.subscribe( params => this.params = params)
    this.getAuthor(this.params)
    this.quote.id = this.params.id
  }
  getAuthor(id) {
    const observable = this._quote.getOneAuthor(id.id)
    observable.subscribe( data => this.author = data)
  }
  addQuote(quote) {
    console.log(quote)
    const observable = this._quote.addQuote(quote)
    // //TODO: add logic to addQuote subscribe to handle errors
    observable.subscribe(data => console.log(data))
    // this.goBack()
  }
  goBack() {
    this._location.back()
  }
}
