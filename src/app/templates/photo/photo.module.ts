import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { HeaderModule } from './../../molecules/header/header.module';
import { MenuModule } from './../../molecules/menu/menu.module';

import { CardModule } from './../../organisms/card/card.module';

@NgModule({
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MenuModule,
    CardModule
  ]
})
export class PhotoModule { }
