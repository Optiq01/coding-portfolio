import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileLanguageListComponent } from './mobile-language-list.component';



@NgModule({
  declarations: [
    MobileLanguageListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MobileLanguageListComponent
  ]
})
export class MobileLanguageListModule { }
