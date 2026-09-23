import { Component } from '@angular/core';
import { AI_LAB_AREAS } from '../../../../core/constants/ai-lab';

@Component({
  selector: 'app-ai-areas',
  standalone: true,
  templateUrl: './ai-areas.component.html',
  styleUrl: './ai-areas.component.scss'
})
export class AiAreasComponent {
  protected readonly areas = AI_LAB_AREAS;
}
