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
  getAuthors(){
    return this._http.get('/quotes')
  }
  getOneAuthor(id) {
    return this._http.get('/quotes/' + id)
  }
  editAuthor(author) {
    return this._http.put('/quotes/author/' + author._id, author)
  }
  addQuote(quote) {
    return this._http.put( '/author/quote/' + quote.id, quote)
  }
  voteUp(quote) {
    return this._http.put('/vote/' + quote.id, quote)
  }
  voteDown(quote) {
    return this._http.put('/vote/' + quote.id, quote)
  }
  deleteQuote(quote) {
    return this._http.delete('/quotes/' + quote.id)
  }
}
