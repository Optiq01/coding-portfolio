import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNavComponent } from './mobile-nav.component';
import { NavLinkModule } from '../nav-bar/nav-link/nav-link.module';



@NgModule({
  declarations: [
    MobileNavComponent
  ],
  imports: [
    CommonModule,
    NavLinkModule
  ],
  exports: [
    CommonModule,
    MobileNavComponent
  ]
})
export class MobileNavModule { }
