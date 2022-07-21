import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateFeatureComponent } from './certificate-feature.component';



@NgModule({
  declarations: [
    CertificateFeatureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    CertificateFeatureComponent
  ]
})
export class CertificateFeatureModule { }
