import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodingSpecialtiesComponent } from './coding-specialties.component';
import { CapabilityComponentModule } from './capability-component/capability-component.module';



@NgModule({
  declarations: [
    CodingSpecialtiesComponent
  ],
  imports: [
    CommonModule,
    CapabilityComponentModule
  ],
  exports: [
    CodingSpecialtiesComponent
  ]
})
export class CodingSpecialtiesModule { }
