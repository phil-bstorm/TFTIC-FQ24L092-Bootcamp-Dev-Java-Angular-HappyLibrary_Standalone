import { HttpInterceptorFn } from '@angular/common/http';
import {catchError, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router:Router = inject(Router);
  const authService: AuthService = inject(AuthService);

  return next(req).pipe(
    catchError(error => {
      console.log(error);

      if(error.status === 401){
        // redirection vers auth/login
        authService.logout();
        router.navigate(['/auth/login']);
        return throwError(() => null);
      }
      /* si on avait une page d'erreur pour les problèmes serveur:
    else if(error.status === 500){
      router.navigate(['/error/server-error']);
      return throwError(() => null);
    }
     */

      /*
      switch (error.status){
        case 401:
          authService.logout();
          router.navigate(['/auth/login']);
          return throwError(() => null);
        case 500:
          router.navigate(['/error/server-error']);
          return throwError(() => null);
      }
      */

      return throwError(() => error);
    })
  );
};
