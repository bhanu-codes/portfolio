import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-flow-visual',
  standalone: true,
  templateUrl: './project-flow-visual.component.html',
  styleUrl: './project-flow-visual.component.scss'
})
export class ProjectFlowVisualComponent {
  readonly steps = input.required<readonly string[]>();
}
