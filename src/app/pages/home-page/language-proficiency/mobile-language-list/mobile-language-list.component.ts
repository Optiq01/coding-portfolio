import { Component, Input, OnInit } from '@angular/core';
import { LanguageObject } from '../language-proficiency.component';

@Component({
  selector: 'mobile-language-list',
  templateUrl: './mobile-language-list.component.html',
  styleUrls: ['./mobile-language-list.component.css']
})
export class MobileLanguageListComponent implements OnInit {

  @Input() LanguageList!: LanguageObject[];

  constructor() { }

  ngOnInit(): void {
  }

}
