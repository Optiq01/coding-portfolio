import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageTypeSelectorComponent } from './language-type-selector.component';



@NgModule({
  declarations: [
    LanguageTypeSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    LanguageTypeSelectorComponent
  ]
})
export class LanguageTypeSelectorModule { }
