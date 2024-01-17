import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { CoursesComponent } from '../courses/courses.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { HeaderComponent } from '../../../header/header.component';

@Component({
  selector: 'app-index-courses',
  standalone: true,
  imports: [
    CategoriesComponent,
    CoursesComponent,
    TestimonialComponent,
    HeaderComponent
  ],
  templateUrl: './index-courses.component.html',
  styleUrl: './index-courses.component.css'
})
export class IndexCoursesComponent {

}
