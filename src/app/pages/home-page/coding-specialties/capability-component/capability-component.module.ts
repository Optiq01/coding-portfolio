import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapabilityComponent } from './capability.component';



@NgModule({
  declarations: [
    CapabilityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    CapabilityComponent
  ],
  bootstrap: [CapabilityComponent]
})
export class CapabilityComponentModule { }
