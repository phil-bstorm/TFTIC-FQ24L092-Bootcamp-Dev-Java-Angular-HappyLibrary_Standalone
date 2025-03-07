import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookShortDtoModel} from '../models/book-short-dto.model';
import {BookDetailDtoModel} from '../models/book-detail-dto.model';
import {BookFormModel} from '../models/book-form.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly _httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  getBooks(): Observable<BookShortDtoModel[]> {
    return this._httpClient.get<BookShortDtoModel[]>('http://localhost:3000/books');
  }

  getBookById(id: number): Observable<BookDetailDtoModel> {
    return this._httpClient.get<BookDetailDtoModel>(`http://localhost:3000/books/${id}`);
  }

  createBook(book: BookFormModel) : Observable<BookDetailDtoModel> {
    return this._httpClient.post<BookDetailDtoModel>('http://localhost:3000/books',book);
  }
}
