import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardCommentModule } from './../../molecules/card-comment/card-comment.module';
import { CardHeaderModule } from './../../molecules/card-header/card-header.module';
import { CardLikesModule } from './../../molecules/card-likes/card-likes.module';
import { CardOptionsModule } from './../../molecules/card-options/card-options.module';
@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [
    CommonModule,
    CardCommentModule,
    CardHeaderModule,
    CardLikesModule,
    CardOptionsModule
  ]
})
export class CardModule { }
