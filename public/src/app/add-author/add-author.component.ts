import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService} from '../quote.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newAuthor: any = {'author' : ''};
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private _quote: QuoteService) { }

  ngOnInit() {
  }
  addAuthor(newAuthor) {
    const observable = this._quote.addAuthor(newAuthor);
    // TODO: write error and success logic into the addAuthor subscribe method
    observable.subscribe( data => console.log(data));
    this.newAuthor = {'author' : ''}
    this.goHome()
  }
  goHome() {
    this._router.navigate(['']);
  }
}
