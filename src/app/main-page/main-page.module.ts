import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageBodyComponent } from './main-page-body/main-page-body.component';
import { AllMainPageComponent } from './all-main-page/all-main-page.component';
import { PageElementsModule } from '../page-elements/page-elements.module';



@NgModule({
  declarations: [
    MainPageBodyComponent,
    AllMainPageComponent
  ],
  imports: [
    CommonModule,
    PageElementsModule
  ],
  exports: [
    AllMainPageComponent
  ]
})
export class MainPageModule { }
