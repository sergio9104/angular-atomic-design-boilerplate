import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLikesComponent } from './card-likes.component';
import { ButtonModule } from './../../atoms/button/button.module';
import { TextModule } from './../../atoms/text/text.module';

@NgModule({
  declarations: [CardLikesComponent],
  exports: [CardLikesComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TextModule
  ]
})
export class CardLikesModule { }
