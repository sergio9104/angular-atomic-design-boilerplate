import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeaderComponent } from './card-header.component';
import { TextModule } from './../../atoms/text/text.module';
import { ImageModule } from './../../atoms/image/image.module';

@NgModule({
  declarations: [CardHeaderComponent],
  exports: [CardHeaderComponent],
  imports: [
    CommonModule,
    TextModule,
    ImageModule
  ]
})
export class CardHeaderModule { }
