import { Component } from '@angular/core';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { HeaderComponent } from '../../../header/header.component';

@Component({
  selector: 'app-index-testimonial',
  standalone: true,
  imports: [
    TestimonialComponent,
    HeaderComponent
  ],
  templateUrl: './index-testimonial.component.html',
  styleUrl: './index-testimonial.component.css'
})
export class IndexTestimonialComponent {

}
