import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { AboutPageModule } from './pages/about-page/about-page.module';
import { ContactPageModule } from './pages/contact-page/contact-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { ProjectsPageModule } from './pages/projects-page/projects-page.module';
import { MobileNavModule } from './mobile-nav/mobile-nav.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    NavBarModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    ProjectsPageModule,
    MobileNavModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
