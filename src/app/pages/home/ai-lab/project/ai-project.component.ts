import { Component } from '@angular/core';
import { KNOWLEDGE_ASSISTANT_FLOW, KNOWLEDGE_ASSISTANT_TECHNOLOGIES } from '../../../../core/constants/ai-lab';

@Component({
  selector: 'app-ai-project',
  standalone: true,
  templateUrl: './ai-project.component.html',
  styleUrl: './ai-project.component.scss'
})
export class AiProjectComponent {
  protected readonly flow = KNOWLEDGE_ASSISTANT_FLOW;
  protected readonly technologies = KNOWLEDGE_ASSISTANT_TECHNOLOGIES;
}
