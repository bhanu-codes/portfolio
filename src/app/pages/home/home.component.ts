import { Component } from '@angular/core';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { AboutComponent } from './about/about.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { HeroComponent } from './hero/hero.component';
import { ExperiencePreviewComponent } from './experience-preview/experience-preview.component';
import { AiLabComponent } from './ai-lab/ai-lab.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ExpertiseComponent, FeaturedProjectsComponent, ExperiencePreviewComponent, AiLabComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
