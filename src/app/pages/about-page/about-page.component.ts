import { Component, OnInit } from '@angular/core';

export const SKILLSETS : string[] = [
  'Hand Illustration and Vectorization',
  'UI and UX Design',
  'Publication and Documentation Design',
  'Product Photography',
  'Solidworks Engineering',
  'Sound Design and Composition',
  'Addative and Subtractive Manufacturing',
  'Gardening and Botany'
];

export interface CertificationItem {
  title: string;
  institution: string;
  link: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Responsive Web Design',
    institution: 'Free Code Camp',
    link: 'https://www.freecodecamp.org/certification/marcw/responsive-web-design'
  },
  {
    title: 'Javascript Algorithms and Data Structures',
    institution: 'Free Code Camp',
    link: 'https://www.freecodecamp.org/certification/marcw/javascript-algorithms-and-data-structures'
  }
]

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  Skillsets!: string[];
  Certifications!: CertificationItem[];

  constructor() { }

  ngOnInit(): void {
    this.Skillsets = SKILLSETS;
    this.Certifications = CERTIFICATIONS;
  }

}
