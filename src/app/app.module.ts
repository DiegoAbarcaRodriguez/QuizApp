import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalQuestionsComponent } from './components/modal-questions/modal-questions.component';
import { ModalAnswersComponent } from './components/modal-answers/modal-answers.component';
import { IconoComponent } from './components/icono/icono.component';
import { IconoWinnerComponent } from './components/icono-winner/icono-winner.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalQuestionsComponent,
    ModalAnswersComponent,
    IconoComponent,
    IconoWinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
