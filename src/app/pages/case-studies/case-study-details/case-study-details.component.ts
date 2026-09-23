import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { CASE_STUDIES } from '../../../core/constants/case-studies';
import { PORTFOLIO_URL } from '../../../core/constants/site';
import { ArchitectureDiagramComponent } from '../shared/architecture-diagram.component';
import { EngineeringDecisionComponent } from '../shared/engineering-decision.component';

@Component({
  selector: 'app-case-study-details',
  standalone: true,
  imports: [ArchitectureDiagramComponent, EngineeringDecisionComponent, RouterLink],
  templateUrl: './case-study-details.component.html',
  styleUrl: './case-study-details.component.scss'
})
export class CaseStudyDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  readonly study = toSignal(
    this.route.paramMap.pipe(map((params) => CASE_STUDIES.find((item) => item.slug === params.get('slug')) ?? null)),
    { initialValue: CASE_STUDIES.find((item) => item.slug === this.route.snapshot.paramMap.get('slug')) ?? null }
  );

  constructor() {
    effect(() => {
      const study = this.study();
      const title = study ? `${study.title} — Bhanu Neeli` : 'Case Study — Bhanu Neeli';
      const description = study?.metaDescription ?? 'Engineering case studies by Bhanu Neeli.';
      const canonicalUrl = study ? `${PORTFOLIO_URL}case-studies/${study.slug}` : PORTFOLIO_URL;
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:title', content: title }, 'property="og:title"');
      this.meta.updateTag({ property: 'og:description', content: description }, 'property="og:description"');
      this.meta.updateTag({ property: 'og:url', content: canonicalUrl }, 'property="og:url"');
      const canonical = this.document.querySelector('link[rel="canonical"]');
      if (canonical) this.renderer.setAttribute(canonical, 'href', canonicalUrl);
    });
  }
}
