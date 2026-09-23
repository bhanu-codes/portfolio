import { Component, input } from '@angular/core';
import { EngineeringDecision } from '../../../core/models/case-study.model';

@Component({
  selector: 'app-engineering-decision',
  standalone: true,
  template: `
    <article class="decision">
      <p class="decision-label">Engineering decision</p>
      <div class="decision-heading">
        <span aria-hidden="true">{{ number() }}</span>
        <h3>{{ decision().title }}</h3>
      </div>
      <dl>
        <div>
          <dt>Why</dt>
          <dd>{{ decision().why }}</dd>
        </div>
        @if (decision().tradeoff) {
          <div>
            <dt>Trade-off</dt>
            <dd>{{ decision().tradeoff }}</dd>
          </div>
        }
        @if (decision().constraint) {
          <div>
            <dt>Constraint</dt>
            <dd>{{ decision().constraint }}</dd>
          </div>
        }
      </dl>
    </article>
  `,
  styleUrl: './engineering-decision.component.scss'
})
export class EngineeringDecisionComponent {
  readonly decision = input.required<EngineeringDecision>();
  readonly number = input.required<string>();
}
