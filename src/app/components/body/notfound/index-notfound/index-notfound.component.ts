import { Component } from '@angular/core';
import { NotfoundComponent } from '../notfound/notfound.component';
import { HeaderComponent } from '../../../header/header.component';

@Component({
  selector: 'app-index-notfound',
  standalone: true,
  imports: [
    NotfoundComponent,
    HeaderComponent
  ],
  templateUrl: './index-notfound.component.html',
  styleUrl: './index-notfound.component.css'
})
export class IndexNotfoundComponent {

}
