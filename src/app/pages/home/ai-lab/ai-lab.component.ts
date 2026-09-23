import { Component } from '@angular/core';
import { AI_LAB_POSITIONING } from '../../../core/constants/ai-lab';
import { AiAreasComponent } from './areas/ai-areas.component';
import { AiProjectComponent } from './project/ai-project.component';

@Component({
  selector: 'app-ai-lab',
  standalone: true,
  imports: [AiAreasComponent, AiProjectComponent],
  templateUrl: './ai-lab.component.html',
  styleUrl: './ai-lab.component.scss'
})
export class AiLabComponent {
  protected readonly positioning = AI_LAB_POSITIONING;
}
