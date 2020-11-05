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
  errors: any;

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
    const observable = this._quote.addQuote(quote)
    observable.subscribe(data => {
      if (data['errors']) {
        this.errors = data['errors'].quotes.errors.quote
      } else {
        console.log("Success!")
        this.goBack()
      }
    })
  }
  goBack() {
    this._location.back()
  }
}
