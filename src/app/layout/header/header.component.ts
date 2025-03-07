import {Component} from '@angular/core';
import {LinkModel} from '../../features/home/models/link.model';
import {RouterLink} from '@angular/router';

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

  links: LinkModel[] = [
    {title: 'Home', url: '/'},
    {title: 'Book', url: '/book'}
  ];
}
