import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { QuoteService } from "../quotes.service";
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
    this._route.params.subscribe( params: Params => this.params = params)
    
  }

}
