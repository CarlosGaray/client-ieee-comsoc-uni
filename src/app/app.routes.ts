import { Routes } from '@angular/router';
import { IndexHomeComponent } from './components/body/home/index-home/index-home.component';
import { IndexAboutComponent } from './components/body/about/index-about/index-about.component';
import { IndexCoursesComponent } from './components/body/courses/index-courses/index-courses.component';
import { IndexTeamComponent } from './components/body/team/index-team/index-team.component';
import { IndexTestimonialComponent } from './components/body/testimonial/index-testimonial/index-testimonial.component';
import { IndexNotfoundComponent } from './components/body/notfound/index-notfound/index-notfound.component';
import { IndexContactComponent } from './components/body/contact/index-contact/index-contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: IndexHomeComponent },
  { path: 'about', component: IndexAboutComponent },
  { path: 'courses', component: IndexCoursesComponent },
  { path: 'team', component: IndexTeamComponent },
  { path: 'testimonial', component: IndexTestimonialComponent },
  { path: 'notfound', component: IndexNotfoundComponent },
  { path: 'contact', component: IndexContactComponent },
];
