import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { LanguageProficiencyModule } from './language-proficiency/language-proficiency.module';
import { CodingSpecialtiesModule } from './coding-specialties/coding-specialties.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    LanguageProficiencyModule,
    CodingSpecialtiesModule
  ]
})
export class HomePageModule { }
