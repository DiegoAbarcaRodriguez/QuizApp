import { Component } from '@angular/core';
import { Question } from './interfaces/questions.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  questions: Question[] = [
    {
      title: 'What is the capital of Mexico',
      options: [
        {
          letter: 'A',
          value: 'lima'
        },
        {
          letter:'B',
          value:'mexico city'
        },
        {
          letter:'C',
          value:'washington, D.C.'
        },
        {
          letter:'D',
          value:'assau'
        }
      ]
    },
    {
      img:'https://flagcdn.com/w320/at.png',
      title: 'Which country does this flag belong to?',
      options: [
        {
          letter: 'A',
          value: 'mexico'
        },
        {
          letter:'B',
          value:'finland'
        },
        {
          letter:'C',
          value:'sweden '
        },
        {
          letter:'D',
          value:'austria '
        }
      ]
    },
    {
      title: 'What is the currency of colombia?',
      options: [
        {
          letter: 'A',
          value: 'usd'
        },
        {
          letter:'B',
          value:'mxn'
        },
        {
          letter:'C',
          value:'cop '
        },
        {
          letter:'D',
          value:'eur'
        }
      ]
    },
    {
      title: 'What do they call the citizens from Peru?',
      options: [
        {
          letter: 'A',
          value: 'mexican'
        },
        {
          letter:'B',
          value:'colombian'
        },
        {
          letter:'C',
          value:'american'
        },
        {
          letter:'D',
          value:'peruvian'
        }
      ]
    }
  ]
}
