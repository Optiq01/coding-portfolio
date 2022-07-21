import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { CertificateFeatureModule } from './certificate-feature/certificate-feature.module';



@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    CertificateFeatureModule
  ]
})
export class AboutPageModule { }
