import {Component, inject} from '@angular/core';
import {BookDetailDtoModel} from '../../models/book-detail-dto.model';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-book-detail',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
  standalone: true
})
export class BookDetailComponent {

  private readonly _bookService: BookService = inject(BookService);
  private readonly _ar: ActivatedRoute = inject(ActivatedRoute);

  book!: BookDetailDtoModel;

  constructor() {
    let id = + this._ar.snapshot.params['id'];
    this._bookService.getBookById(id).subscribe({
      next: (datas: BookDetailDtoModel) => {
        this.book = datas;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
