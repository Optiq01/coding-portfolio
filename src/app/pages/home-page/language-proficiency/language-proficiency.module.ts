import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageProficiencyComponent } from './language-proficiency.component';
import { MobileLanguageListModule } from './mobile-language-list/mobile-language-list.module';
import { MonitorLanguageListModule } from './monitor-language-list/monitor-language-list.module';
import { LanguageTypeSelectorModule } from './language-type-selector/language-type-selector.module';



@NgModule({
  declarations: [
    LanguageProficiencyComponent
  ],
  imports: [
    CommonModule,
    MobileLanguageListModule,
    MonitorLanguageListModule,
    LanguageTypeSelectorModule
  ],
  exports: [
    CommonModule,
    LanguageProficiencyComponent
  ]
})
export class LanguageProficiencyModule { }
