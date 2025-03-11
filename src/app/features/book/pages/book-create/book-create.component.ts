import {Component, inject} from '@angular/core';
import {BookService} from '../../services/book.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss',
  standalone: true
})
export class BookCreateComponent {

  private readonly _bookService: BookService = inject(BookService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);

  bookForm: FormGroup;

  constructor() {
    this.bookForm = this._fb.group({
      isbn: [null,[Validators.required,Validators.minLength(3),Validators.maxLength(13)]],
      title: [null,[Validators.required,Validators.maxLength(50)]],
      author: [null,[Validators.required,Validators.maxLength(50)]],
      description: [null,[Validators.maxLength(255)]],
      releaseDate: [null,[Validators.required]],
    });
  }

  submit() {

    if(this.bookForm.invalid) {
      return;
    }

    this._bookService.createBook(this.bookForm.value).subscribe({
      next: (datas) => {
        this._router.navigate(['/book']);
      },
      error: err => {
        console.log("Erreur dans le createBook", err);
        if(err) {
          console.log(err);
        }
      }
    });
  }
}
