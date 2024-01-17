import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  currentIndex = 1;

carouselItems = [
  {
    image: './../../../../../assets/img/carousel-1.jpg',
    title: 'Best Online Courses',
    subtitle: 'The Best Online Learning Platform',
    description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.'
  },
  {
    image: './../../../../../assets/img/carousel-2.jpg',
    title: 'Best Online Courses',
    subtitle: 'Get Educated Online From Your Home',
    description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.'
  }
];

changeSlide(index: number) {
  if (index < 0) {
    this.currentIndex = this.carouselItems.length - 1;
  } else if (index >= this.carouselItems.length) {
    this.currentIndex = 0;
  } else {
    this.currentIndex = index;
  }
}

}
