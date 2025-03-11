import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthLoginCredentialsModel} from '../models/auth-login-credentials.model';
import {AuthTokenModel} from '../models/auth-token.model';
import {AuthRegisterCredentialsModel} from '../models/auth-register-credentials.model';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _httpClient: HttpClient = inject(HttpClient);

  currentUser: WritableSignal<AuthTokenModel | null> = signal<AuthTokenModel | null >(null);

  constructor() {
    const localStorageUser = localStorage.getItem('currentUser');
    if(localStorageUser){
      this.currentUser.set(JSON.parse(localStorageUser));
    }
  }

  register(credential:AuthRegisterCredentialsModel){
    return this._httpClient.post<AuthTokenModel>('http://localhost:3000/register', credential).pipe(
      tap((res: AuthTokenModel | null) => {
        // utiliser res pour mettre à jour le signal currentUser
        if(res){
          this.currentUser.set(res);
          localStorage.setItem('currentUser', JSON.stringify(res));
        }

        // ensuite les subscriers de register s'execute
      })
    );
  }

  login(credential:AuthLoginCredentialsModel){
    return this._httpClient.post<AuthTokenModel>('http://localhost:3000/login', credential).pipe(
      tap((res: AuthTokenModel | null) => {
        // utiliser res pour mettre à jour le signal currentUser
        if(res){
          this.currentUser.set(res);
          localStorage.setItem('currentUser', JSON.stringify(res));
        }

        // ensuite les subscriers de register s'execute
      })
    );
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUser.set(null);
  }
}
