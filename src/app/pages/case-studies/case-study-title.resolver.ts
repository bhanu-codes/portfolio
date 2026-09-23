import { ResolveFn } from '@angular/router';
import { CASE_STUDIES } from '../../core/constants/case-studies';

export const caseStudyTitleResolver: ResolveFn<string> = (route) => {
  const study = CASE_STUDIES.find((item) => item.slug === route.paramMap.get('slug'));
  return study ? `${study.title} — Bhanu Neeli` : 'Case Study — Bhanu Neeli';
};
