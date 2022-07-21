import { Component, Input, OnInit } from '@angular/core';
import { ProjectFeature } from '../projects-page.component';

@Component({
  selector: 'project-feature',
  templateUrl: './project-feature.component.html',
  styleUrls: ['./project-feature.component.css']
})
export class ProjectFeatureComponent implements OnInit {

  @Input() Project!: ProjectFeature;

  constructor() { }

  ngOnInit(): void {
  }

}
