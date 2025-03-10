import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-register',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './auth-register.component.html',
  styleUrl: './auth-register.component.scss'
})
export class AuthRegisterComponent {
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  registerForm: FormGroup;

  constructor() {
    this.registerForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.minLength(8)]],
    });
  }

  submit() {
    if (this.registerForm.invalid) {
      console.log('Invalid form', this.registerForm.value);
      return;
    }

    this._authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        this._router.navigate(['/auth/login']);
      },
      error: (error) => {
        // ça a échoué!
        console.log('Error', error);
      }
    });
  }
}
