import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from './big-card/big-card.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { TitleComponent } from './title/title.component';
import { HomeComponent } from '../pages/home/home.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BigCardComponent,
    MenuBarComponent,
    SmallCardComponent,
    TitleComponent,
    HomeComponent,
  ],
  exports: [
    CommonModule,
    BigCardComponent,
    MenuBarComponent,
    SmallCardComponent,
    TitleComponent,
    HomeComponent,
  ],
})
export class ComponentsModule {}
