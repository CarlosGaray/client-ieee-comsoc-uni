import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { HeaderComponent } from '../../../header/header.component';

@Component({
  selector: 'app-index-contact',
  standalone: true,
  imports: [
    ContactComponent,
    HeaderComponent
  ],
  templateUrl: './index-contact.component.html',
  styleUrl: './index-contact.component.css'
})
export class IndexContactComponent {

}
