import { Routes } from '@angular/router';
import {isConnectedGuard} from './features/auth/guards/is-connected.guard';

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
    canActivate: [isConnectedGuard],
    loadComponent: () => import("./features/book/pages/book-create/book-create.component").then(c => c.BookCreateComponent),
  },
  {
    path: "book/:id",
    loadComponent: () => import("./features/book/pages/book-detail/book-detail.component").then(c => c.BookDetailComponent),
  },
  {
    path: "auth/register",
    loadComponent: () => import("./features/auth/pages/auth-register/auth-register.component").then(c => c.AuthRegisterComponent)
  },
  {
    path: "auth/login",
    loadComponent: () => import("./features/auth/pages/auth-login/auth-login.component").then(c => c.AuthLoginComponent)
  }
];
