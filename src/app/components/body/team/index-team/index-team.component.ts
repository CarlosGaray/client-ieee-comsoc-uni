import { Component } from '@angular/core';
import { TeamComponent } from '../team/team.component';
import { HeaderComponent } from '../../../header/header.component';

@Component({
  selector: 'app-index-team',
  standalone: true,
  imports: [
    TeamComponent,
    HeaderComponent
  ],
  templateUrl: './index-team.component.html',
  styleUrl: './index-team.component.css'
})
export class IndexTeamComponent {

}
