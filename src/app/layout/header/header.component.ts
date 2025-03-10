import {Component, inject} from '@angular/core';
import {LinkModel} from '../../features/home/models/link.model';
import {RouterLink} from '@angular/router';
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
  userConnected = this._authService.currentUser;

  links: LinkModel[] = [
    {title: 'Home', url: '/'},
    {title: 'Book', url: '/book'}
  ];
}
