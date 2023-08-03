import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './component/loader/loader.component';
import { HomeComponent } from './component/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
// import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { NewsComponent } from './pages/news/news.component';
import { ChallengeComponent } from './pages/challenge/challenge.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [AppComponent, LoaderComponent, HomeComponent, HeroComponent, NewsComponent, ChallengeComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedmoduleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
