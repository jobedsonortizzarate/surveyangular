import { Component } from '@angular/core';
import { SurveyModule } from 'survey-angular-ui';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [SurveyModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent {

}
