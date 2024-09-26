import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGameplaysPageComponent } from './all-gameplays-page/all-gameplays-page.component';
import { GameplaysPageBodyComponent } from './gameplays-page-body/gameplays-page-body.component';
import { PageElementsModule } from '../page-elements/page-elements.module';



@NgModule({
  declarations: [
    AllGameplaysPageComponent,
    GameplaysPageBodyComponent
  ],
  imports: [
    CommonModule,
    PageElementsModule
  ],
  exports: [
    AllGameplaysPageComponent
  ]
})
export class GameplaysPageModule { }
