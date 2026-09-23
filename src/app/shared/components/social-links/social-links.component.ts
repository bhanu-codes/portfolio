import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../../core/constants/social-links';

@Component({
  selector: 'app-social-links',
  standalone: true,
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  readonly links = SOCIAL_LINKS;
}
