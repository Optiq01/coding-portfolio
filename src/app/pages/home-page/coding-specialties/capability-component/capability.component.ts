import { Component, Input, OnInit } from '@angular/core';
import { CodeCapability } from '../coding-specialties.component';

@Component({
  selector: 'code-capability',
  templateUrl: './capability.component.html',
  styleUrls: ['./capability.component.css']
})
export class CapabilityComponent implements OnInit {

  @Input() Capability!: CodeCapability;

  constructor() { }

  ngOnInit(): void {
  }

}
