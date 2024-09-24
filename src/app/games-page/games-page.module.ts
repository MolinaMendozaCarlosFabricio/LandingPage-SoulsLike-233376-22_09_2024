import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesPageComponent } from './all-games-page/all-games-page.component';
import { PageElementsModule } from '../page-elements/page-elements.module';
import { GamesPageBodyComponent } from './games-page-body/games-page-body.component';



@NgModule({
  declarations: [
    AllGamesPageComponent,
    GamesPageBodyComponent
  ],
  imports: [
    CommonModule,
    PageElementsModule
  ],
  exports: [
    AllGamesPageComponent
  ]
})
export class GamesPageModule { }
