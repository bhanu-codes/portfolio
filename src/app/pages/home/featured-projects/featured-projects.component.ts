import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../../core/constants/projects';
import { ProjectFlowVisualComponent } from '../../../shared/components/project-flow-visual/project-flow-visual.component';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [ProjectFlowVisualComponent, RouterLink],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  readonly featuredProject = PROJECTS.find((project) => project.featured);
  readonly otherProjects = PROJECTS.filter((project) => !project.featured);
}
