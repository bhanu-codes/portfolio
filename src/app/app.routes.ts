import { Routes } from '@angular/router';
import { CaseStudyDetailsComponent } from './pages/case-studies/case-study-details/case-study-details.component';
import { CaseStudyListComponent } from './pages/case-studies/case-study-list/case-study-list.component';
import { caseStudyTitleResolver } from './pages/case-studies/case-study-title.resolver';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';
import { ProjectsListComponent } from './pages/projects/projects-list/projects-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Bhanu Neeli | Software Engineer' },
  { path: 'projects', component: ProjectsListComponent, title: 'Projects' },
  { path: 'projects/:slug', component: ProjectDetailsComponent, title: 'Project' },
  { path: 'case-studies', component: CaseStudyListComponent, title: 'Case Studies' },
  { path: 'case-studies/:slug', component: CaseStudyDetailsComponent, title: caseStudyTitleResolver },
  { path: '**', redirectTo: '' }
];
