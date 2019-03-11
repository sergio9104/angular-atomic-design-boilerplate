import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCommentComponent } from './card-comment.component';
import { TextModule } from './../../atoms/text/text.module';

@NgModule({
  declarations: [CardCommentComponent],
  exports: [CardCommentComponent],
  imports: [
    CommonModule,
    TextModule
  ]
})
export class CardCommentModule { }
