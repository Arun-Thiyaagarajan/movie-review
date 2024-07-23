import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@shared/icon.module';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { EmojiPickerComponent } from '@shared/components/emoji-picker/emoji-picker.component';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { StrplusPipe } from './pipes/strplus.pipe';
import { AngularMaterialModule } from '@shared/angular-material.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    SlugifyPipe,
    EmojiPickerComponent,
    StrplusPipe,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    IconModule,
    MatProgressBarModule,
    SlugifyPipe,
    EmojiPickerComponent,
    StrplusPipe,
    AngularMaterialModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    MatProgressBarModule,
    EmojiModule,
    PickerModule,
    AngularMaterialModule,
  ]
})
export class SharedModule { }
