import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly year = 2026;
}
