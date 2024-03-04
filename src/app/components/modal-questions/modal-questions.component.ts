import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { Question } from 'src/app/interfaces/questions.interface';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'modal-questions',
  templateUrl: './modal-questions.component.html',
  styleUrls: ['./modal-questions.component.css']
})
export class ModalQuestionsComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.showPopUp();

  }


  @Input()
  question?: Question;

  @Input()
  questionIndex?: number;

  @ViewChildren('button')
  buttonsArray: ElementRef<HTMLButtonElement>[] = []

  public receivedAnswer?: string;
  public answer?: string;

  get index(): number {
    return this.countryService.index;
  }

  get disableButtonNext(): boolean {
    return this.countryService.disableButtonNext;
  }




  private popUp?: HTMLElement;

  nextPage() {
    if (this.countryService.index === 3) {
      this.countryService.index++;
      return;
    }

    this.countryService.disableButtonNext = true;

    this.showPopUp();
    this.countryService.index++;
    this.showPopUp();

  }

  private showPopUp() {
    this.popUp = document.querySelector(`[data-id="${this.countryService.index}"]`) || undefined;
    this.popUp?.classList.toggle('d-none');
  }


  chooseAnswer(value: string) {

    const button = document.querySelector(`[data-value="${value}"]`);
    const check = document.createElement('i');


    switch (this.questionIndex) {
      case 0:
        this.answer = 'Mexico';

        this.countryService.searchByCapital(value)
          .subscribe(country => {

            this.countryService.disableButtonNext = false;
            this.receivedAnswer = country;
            this.markAnswer(button, check);

          });
        break;

      case 1:

        this.answer = 'https://flagcdn.com/w320/at.png';

        this.countryService.searchByFlag(value)
          .subscribe(flag => {

            this.countryService.disableButtonNext = false;
            this.receivedAnswer = flag;
            this.markAnswer(button, check);

          });

        break;

      case 2:
        this.answer = 'Colombia';

        this.countryService.searchByCurrency(value)
          .subscribe(country => {

            this.countryService.disableButtonNext = false;
            this.receivedAnswer = country;
            this.markAnswer(button, check);

          });
        break;

      case 3:
        this.answer = 'Peru';

        this.countryService.searchByCitizen(value)
          .subscribe(country => {

            this.countryService.disableButtonNext = false;
            this.receivedAnswer = country;
            this.markAnswer(button, check);

          });
        break;

      default:
        break;
    }

    this.disableButtons();

  }

  private markAnswer(button: any, check: HTMLElement) {
    if (this.answer !== this.receivedAnswer) {
      button?.classList.add('btn-danger', 'btn', 'text-white');
      check.classList.add('bi', 'bi-x-circle', 'ms-auto', 'fs-6');
    }
    else {
      button?.classList.add('btn-success', 'btn', 'text-white');
      check.classList.add('bi', 'bi-check-circle', 'ms-auto', 'fs-6');
      this.countryService.numberCorrectedAnwers++;
    }

    button?.appendChild(check);
    button?.classList.remove('btn-outline-warning');
  }

  private disableButtons() {
    this.buttonsArray.forEach(button => {

      button.nativeElement.disabled = true;
    });
  }


}
