import {Component, inject} from '@angular/core';
import {BookShortDtoModel} from '../../models/book-short-dto.model';
import {BookService} from '../../services/book.service';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-book-index',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './book-index.component.html',
  styleUrl: './book-index.component.scss',
  standalone: true
})
export class BookIndexComponent {

  private readonly _bookService: BookService = inject(BookService);

  books: BookShortDtoModel[] = [];

  constructor() {

    this._bookService.getBooks().subscribe({
      next: (datas: BookShortDtoModel[]) => {
        this.books = datas;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
