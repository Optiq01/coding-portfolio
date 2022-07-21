import { Component, OnInit } from '@angular/core';

export interface ProjectFeature {
  photo: string;
  title: string;
  techList: string[];
  description: string;
  link: string;
}

export const PROJECTS: ProjectFeature[] = [
  {
    photo: 'path_01.jpg',
    title: 'Some Title 01',
    techList: ['Angular', 'SVG', 'NGXS'],
    description: 'Some description blah blah blah',
    link: 'some-path-01'
  },
  {
    photo: 'path_02.jpg',
    title: 'Some Title 02',
    techList: ['HTML', 'CSS', 'Javascript'],
    description: 'Some description blah blah blah',
    link: 'some-path-02'
  },
  {
    photo: 'path_03.jpg',
    title: 'Some Title 03',
    techList: ['React', 'CSS', 'SVG'],
    description: 'Some description blah blah blah',
    link: 'some-path-03'
  },
  {
    photo: 'path_04.jpg',
    title: 'Some Title 04',
    techList: ['Angular', 'NestJS', 'NGXS'],
    description: 'Some description blah blah blah',
    link: 'some-path-04'
  },
  {
    photo: 'path_05.jpg',
    title: 'Some Title 05',
    techList: ['Angular', 'NestJS', 'NGXS'],
    description: 'Some description blah blah blah',
    link: 'some-path-05'
  },
  {
    photo: 'path_06.jpg',
    title: 'Some Title 06',
    techList: ['NestJS', 'Firebase'],
    description: 'Some description blah blah blah',
    link: 'some-path-06'
  },
  {
    photo: 'path_07.jpg',
    title: 'Some Title 07',
    techList: ['React', 'TSX', 'Redux'],
    description: 'Some description blah blah blah',
    link: 'some-path-07'
  },
]

@Component({
  selector: 'projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  ProjectList!: ProjectFeature[];

  constructor() { }

  ngOnInit(): void {
    this.ProjectList = PROJECTS;
  }

}
