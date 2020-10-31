import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  addAuthor(author) {
    return this._http.post('/quotes/author', author);
  }
}
