import { Component } from '@angular/core';
import { CONTACT_EMAIL } from '../../../core/constants/social-links';
import { SocialLinksComponent } from '../../../shared/components/social-links/social-links.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected readonly emailHref = `mailto:${CONTACT_EMAIL}`;
}
