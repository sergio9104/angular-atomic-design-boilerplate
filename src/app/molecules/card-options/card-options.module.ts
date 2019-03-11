import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOptionsComponent } from './card-options.component';
import { ButtonModule } from './../../atoms/button/button.module';

@NgModule({
  declarations: [CardOptionsComponent],
  exports: [CardOptionsComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class CardOptionsModule { }
