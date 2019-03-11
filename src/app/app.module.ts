import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ButtonModule } from './atoms/button/button.module';
import { ImageModule } from './atoms/image/image.module';
import { TextModule } from './atoms/text/text.module';

import { CardCommentModule } from './molecules/card-comment/card-comment.module';
import { CardHeaderModule } from './molecules/card-header/card-header.module';
import { CardLikesModule } from './molecules/card-likes/card-likes.module';
import { CardOptionsModule } from './molecules/card-options/card-options.module';
import { HeaderModule } from './molecules/header/header.module';
import { MenuModule } from './molecules/menu/menu.module';

import { CardModule } from './organisms/card/card.module';

import { PhotoModule } from './templates/photo/photo.module';

import { PhotoPageModule } from './pages/photo-page/photo-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    ImageModule,
    TextModule,
    CardCommentModule,
    CardHeaderModule,
    CardLikesModule,
    CardOptionsModule,
    HeaderModule,
    MenuModule,
    CardModule,
    PhotoModule,
    PhotoPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
