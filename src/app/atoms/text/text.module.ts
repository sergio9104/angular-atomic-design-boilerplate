import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text.component';

@NgModule({
  declarations: [TextComponent],
  exports: [
    TextComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TextModule { }
