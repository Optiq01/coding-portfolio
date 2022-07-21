import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { NavLinkModule } from './nav-link/nav-link.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NavLinkModule
  ],
  exports: [
    CommonModule,
    NavBarComponent
  ]
})
export class NavBarModule { }
