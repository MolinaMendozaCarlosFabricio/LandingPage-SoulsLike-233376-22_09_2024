import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { GamesPageModule } from './games-page/games-page.module';
import { RouterModule, Routes } from '@angular/router';
import { AllMainPageComponent } from './main-page/all-main-page/all-main-page.component';
import { AllGamesPageComponent } from './games-page/all-games-page/all-games-page.component';
import { AllGameplaysPageComponent } from './gameplays-page/all-gameplays-page/all-gameplays-page.component';
import { GameplaysPageModule } from './gameplays-page/gameplays-page.module';

const routes: Routes = [
  {path: '', component: AllMainPageComponent},
  {path: 'games', component: AllGamesPageComponent},
  {path: 'gameplays', component: AllGameplaysPageComponent}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
