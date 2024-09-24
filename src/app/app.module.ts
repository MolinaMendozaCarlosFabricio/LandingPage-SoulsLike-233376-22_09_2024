import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { GamesPageModule } from './games-page/games-page.module';
import { RouterModule, Routes } from '@angular/router';
import { AllMainPageComponent } from './main-page/all-main-page/all-main-page.component';
import { AllGamesPageComponent } from './games-page/all-games-page/all-games-page.component';

const routes: Routes = [
  {path: '', component: AllMainPageComponent},
  {path: 'games', component: AllGamesPageComponent}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MainPageModule,
    GamesPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
