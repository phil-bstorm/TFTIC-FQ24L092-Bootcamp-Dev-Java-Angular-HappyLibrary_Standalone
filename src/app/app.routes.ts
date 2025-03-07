import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./features/home/pages/home/home.component").then(c => c.HomeComponent),
  },
  {
    path: "book",
    loadComponent: () => import("./features/book/pages/book-index/book-index.component").then(c => c.BookIndexComponent),
  },
  {
    path: "book/create",
    loadComponent: () => import("./features/book/pages/book-create/book-create.component").then(c => c.BookCreateComponent),
  },
  {
    path: "book/:id",
    loadComponent: () => import("./features/book/pages/book-detail/book-detail.component").then(c => c.BookDetailComponent),
  },
];
