import { Component } from '@angular/core';
import { EXPERIENCE } from '../../../core/constants/experience';

@Component({
  selector: 'app-experience-preview',
  standalone: true,
  templateUrl: './experience-preview.component.html',
  styleUrl: './experience-preview.component.scss'
})
export class ExperiencePreviewComponent {
  protected readonly experiences = EXPERIENCE;
}
