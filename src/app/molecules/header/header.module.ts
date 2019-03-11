import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonModule } from './../../atoms/button/button.module';
import { TextModule } from './../../atoms/text/text.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TextModule
  ]
})
export class HeaderModule { }
