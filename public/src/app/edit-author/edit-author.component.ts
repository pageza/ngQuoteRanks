import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import { QuoteService} from "../quote.service";

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  params: any;
  author: any;
  errors: any;
  constructor(
    private _quote: QuoteService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.params = params)
    this.getAuthor(this.params)
  }
  getAuthor(id) {
    const observable = this._quote.getOneAuthor(id.id)
    observable.subscribe( data => this.author = data)
  }
  editAuthor(author) {
    const observable = this._quote.editAuthor(author)
    observable.subscribe(data => {
      if (data['errors']) {
        this.errors = data['errors']
      } else {
        console.log("Success!")
        this.goHome()
      }
    })
  }
  goHome() {
    this._router.navigate(['/'])
  }
}
