import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';

interface ExpertiseArea {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  learning?: boolean;
}

@Component({
  selector: 'app-expertise',
  standalone: true,
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss'
})
export class ExpertiseComponent implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  readonly areas: ExpertiseArea[] = [
    {
      number: '01',
      title: 'Backend Engineering',
      description: 'Building application services and APIs for enterprise software.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'Hibernate', 'PostgreSQL']
    },
    {
      number: '02',
      title: 'Distributed Systems',
      description: 'Connecting services through event flows and dependable integrations.',
      technologies: ['Microservices', 'Apache Kafka', 'Event-driven services', 'API integrations']
    },
    {
      number: '03',
      title: 'Cloud & Enterprise',
      description: 'Working across cloud infrastructure, delivery pipelines and evolving enterprise systems.',
      technologies: ['AWS', 'Docker', 'CI/CD', 'Production systems', 'Enterprise modernisation']
    },
    {
      number: '04',
      title: 'AI Applications',
      description: 'Current learning and project areas; not claimed production experience.',
      technologies: ['LLMs', 'Prompt Engineering', 'RAG', 'Vector Search', 'LangChain'],
      learning: true
    }
  ];

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.element.nativeElement.classList.add('is-visible');
        this.observer?.disconnect();
      }
    }, { threshold: 0.08 });
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
