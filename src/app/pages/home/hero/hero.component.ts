import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SOCIAL_LINKS } from '../../../core/constants/social-links';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly socialLinks = SOCIAL_LINKS;
  readonly technologies = ['Java', 'Spring Boot', 'Angular', 'Microservices', 'AWS', 'AI / GenAI'];
}
