import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService} from '../quote.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  author: any;
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private _quote: QuoteService) { }

  ngOnInit() {
  }
  addAuthor(author) {
    const observable = this._quote.addAuthor(author);
    observable.subscribe( data => console.log(data));
  }
  goHome() {
    this._router.navigate(['']);
  }
}
