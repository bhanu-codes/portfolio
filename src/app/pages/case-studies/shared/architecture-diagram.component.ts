import { Component, input } from '@angular/core';
import { ArchitectureVisual } from '../../../core/models/case-study.model';

@Component({
  selector: 'app-architecture-diagram',
  standalone: true,
  template: `
    <figure class="architecture-figure" [attr.aria-label]="diagram().description">
      <figcaption>
        <h3>{{ diagram().title }}</h3>
        <p>{{ diagram().description }}</p>
      </figcaption>
      <ol class="architecture-flow">
        @for (stage of diagram().stages; track $index; let last = $last) {
          <li class="architecture-stage">
            <ul class="architecture-nodes">
              @for (node of stage.nodes; track node) {
                <li>{{ node }}</li>
              }
            </ul>
            @if (!last) {
              <span class="flow-connector" aria-hidden="true"></span>
            }
          </li>
        }
      </ol>
      @if (diagram().branches; as branches) {
        <div class="branching">
          <p class="branch-origin">Paths from <strong>{{ branches.from }}</strong></p>
          <ul class="branch-list">
            @for (path of branches.paths; track path.label) {
              <li class="branch-path">
                <p class="branch-label">{{ path.label }}</p>
                <ol class="branch-flow">
                  @for (node of path.nodes; track node; let last = $last) {
                    <li>
                      <span>{{ node }}</span>
                      @if (!last) { <span class="branch-connector" aria-hidden="true">↓</span> }
                    </li>
                  }
                </ol>
              </li>
            }
          </ul>
        </div>
      }
    </figure>
  `
})
export class ArchitectureDiagramComponent {
  readonly diagram = input.required<ArchitectureVisual>();
}
