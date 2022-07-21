import { Component, Input, OnInit } from '@angular/core';

export const SPECIALTIES : string[] = [
  'Responsive HTML',
  'Responsive  SVG Logos',
  'Micro Frontends',
  'Web Components',
  'State Management',
  'Backend Logic',
  'Frontend Design',
  'UI Architecture and Design',
  'CSS Grid Layout'
]

@Component({
  selector: 'coding-specialties',
  templateUrl: './coding-specialties.component.html',
  styleUrls: ['./coding-specialties.component.css']
})
export class CodingSpecialtiesComponent implements OnInit {

  @Input() Specialties! : string[];

  constructor() { }

  ngOnInit(): void {
    this.Specialties = SPECIALTIES;
  }

}
