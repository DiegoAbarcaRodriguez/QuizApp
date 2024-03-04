import { Component, Input } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'modal-answers',
  templateUrl: './modal-answers.component.html',
  styleUrls: ['./modal-answers.component.css']
})
export class ModalAnswersComponent {

  constructor(private countryService: CountryService) { }

  get numberCorrectedAnswers(): number {
    return this.countryService.numberCorrectedAnwers;
  }

  rebootQuiz() {

    this.countryService.index = 0;
    this.countryService.numberCorrectedAnwers = 0;
    this.countryService.disableButtonNext=true;

    const modalQuestions = document.querySelectorAll('[data-id]');
    modalQuestions.forEach(modal => modal.classList.add('d-none'));
    modalQuestions[0].classList.remove('d-none');
  }
}
