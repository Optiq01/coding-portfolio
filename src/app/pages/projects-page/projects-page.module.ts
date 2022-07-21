import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './projects-page.component';
import { ProjectFeatureModule } from './project-feature/project-feature.module';



@NgModule({
  declarations: [
    ProjectsPageComponent
  ],
  imports: [
    CommonModule,
    ProjectFeatureModule
  ],
  exports: [
    ProjectsPageComponent
  ]
})
export class ProjectsPageModule { }
