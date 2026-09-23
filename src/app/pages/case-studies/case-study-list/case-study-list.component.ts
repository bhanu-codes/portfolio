import { Component, inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CASE_STUDIES } from '../../../core/constants/case-studies';
import { PORTFOLIO_URL } from '../../../core/constants/site';

@Component({
  selector: 'app-case-study-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './case-study-list.component.html',
  styleUrl: './case-study-list.component.scss'
})
export class CaseStudyListComponent {
  readonly studies = CASE_STUDIES;

  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly renderer = inject(Renderer2);

  constructor() {
    const description = 'Engineering case studies exploring the problems, constraints and decisions behind selected software systems.';
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: 'Case Studies — Bhanu Neeli' }, 'property="og:title"');
    this.meta.updateTag({ property: 'og:description', content: description }, 'property="og:description"');
    this.meta.updateTag({ property: 'og:url', content: `${PORTFOLIO_URL}case-studies` }, 'property="og:url"');
    const canonical = this.document.querySelector('link[rel="canonical"]');
    if (canonical) this.renderer.setAttribute(canonical, 'href', `${PORTFOLIO_URL}case-studies`);
  }
}
