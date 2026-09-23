import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PROJECTS } from '../../../core/constants/projects';
import { ProjectFlowVisualComponent } from '../../../shared/components/project-flow-visual/project-flow-visual.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [ProjectFlowVisualComponent, RouterLink],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  readonly project = toSignal(
    this.route.paramMap.pipe(
      map((params) => PROJECTS.find((item) => item.slug === params.get('slug')) ?? null)
    ),
    { initialValue: null }
  );
}
