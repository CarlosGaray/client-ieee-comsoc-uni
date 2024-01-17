import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { TeamComponent } from '../team/team.component';
import { HeaderComponent } from '../../../header/header.component';

@Component({
  selector: 'app-index-about',
  standalone: true,
  imports: [
    ServiceComponent,
    AboutComponent,
    TeamComponent,
    HeaderComponent
  ],
  templateUrl: './index-about.component.html',
  styleUrl: './index-about.component.css'
})
export class IndexAboutComponent {

}
