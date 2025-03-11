import {Component, inject} from '@angular/core';
import {LinkModel} from '../../features/home/models/link.model';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);
  userConnected = this._authService.currentUser;

  links: LinkModel[] = [
    {title: 'Home', url: '/'},
    {title: 'Book', url: '/book'}
  ];

  logout() {
    this._authService.logout();
    // redirection vers home ("/")
    this._router.navigate(["/"]);
  }
}
