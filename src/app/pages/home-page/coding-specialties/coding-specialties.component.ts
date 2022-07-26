import { Component, Input, OnInit } from '@angular/core';

export interface CodeCapability{
  ability: string;
  description: string;
}

export const CAPABILITIES: CodeCapability[]=[
  {
    ability: 'Responsive HTML and SVG',
    description: 'I make layouts responsive from smart watch to smart t.v. using a scaling tool I created with vanilla CSS.'
  },
  {
    ability: 'Monorepo Development',
    description: 'I use NRWL NX to build monorepo environments for organizing frontend and backend applications that work together.'
  },
  {
    ability: 'Micro Frontends',
    description: 'I create small single purpose applications that can in turn be pulled together into a larger application using something like NRWL NX.'
  },
  {
    ability: 'Web Components',
    description: `I'm able to make reusable components with Angular, React or Vue for use in any project.`
  },
  {
    ability: 'Database Design',
    description: 'I have a knack for rationalizing complex data structures that minimize the load of API responses from databases.'
  },
  {
    ability: 'Cloud Functions',
    description: 'I can lighten the load of backend applications by creating cloud functions that do most of the heavy lifting.'
  },
  {
    ability: 'State Management',
    description: 'I can create complex states that minimize repeated requests to the backend and database.'
  },
  {
    ability: 'Web Animation',
    description: `I use Angular's Animation notation to create simple UI animations and have used libraries like Green Sock to create more complex animations with SVG.`
  },
  {
    ability: 'Backend Logic',
    description: 'I use NestJS to create applications that can cater to multiple frontend and or micro frontend applications.'
  },
  {
    ability: 'UI Architecture and Wireframing',
    description: `I'm able to see an application as both an entire forest and individual trees simultaneously while mapping out the functionality in bite sized parts that will be intuitive to the users.`
  },
  {
    ability: 'CSS Grid Design',
    description: `I'm able to achieve complex and adaptable layouts with minimal media query usage.`
  }
]

export const SPECIALTIES : string[] = [
  'Responsive HTML and SVG',
  'Monorepo Development',
  'Micro Frontends',
  'Web Components',
  'Database Design',
  'Cloud Functions',
  'State Management',
  'Web Animation',
  'Backend Logic',
  'UI Architecture and Wireframing',
  'CSS Grid Design'
]

@Component({
  selector: 'coding-specialties',
  templateUrl: './coding-specialties.component.html',
  styleUrls: ['./coding-specialties.component.css']
})
export class CodingSpecialtiesComponent implements OnInit {

  @Input() Capabilities!: CodeCapability[];

  constructor() { }

  ngOnInit(): void {
    this.Capabilities = CAPABILITIES;
  }

}
