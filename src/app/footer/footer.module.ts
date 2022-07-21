import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FooterComponent
  ],
  bootstrap: [FooterComponent]
})
export class FooterModule { }
