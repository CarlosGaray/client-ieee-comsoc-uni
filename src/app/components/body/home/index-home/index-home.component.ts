import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { ServiceComponent } from '../service/service.component';
import { AboutComponent } from '../about/about.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CoursesComponent } from '../courses/courses.component';
import { TeamComponent } from '../team/team.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
  selector: 'app-index-home',
  standalone: true,
  imports: [
    CarouselComponent,
    ServiceComponent,
    AboutComponent,
    CategoriesComponent,
    CoursesComponent,
    TeamComponent,
    TestimonialComponent,
  ],
  templateUrl: './index-home.component.html',
  styleUrl: './index-home.component.css'
})
export class IndexHomeComponent {

}
