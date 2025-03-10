import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss'
})
export class AuthLoginComponent {
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  loginForm: FormGroup;

  constructor() {
    this.loginForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.minLength(8)]],
    });
  }

  loginSubmit() {
    if(this.loginForm.invalid) {
      console.log('Invalid form', this.loginForm.value);
      return;
    }

    this._authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this._router.navigate(['/']);
      },
      error: (error) => {
        // ça a échoué!
        console.log('Error', error);
      }
    });
  }
}
