import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPageComponent } from './photo-page.component';
import { PhotoModule } from './../../templates/photo/photo.module';

@NgModule({
  declarations: [PhotoPageComponent],
  exports: [PhotoPageComponent],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoPageModule { }
