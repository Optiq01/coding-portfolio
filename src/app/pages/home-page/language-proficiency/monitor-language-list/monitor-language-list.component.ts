import { Component, Input, OnInit } from '@angular/core';
import { LanguageObject } from '../language-proficiency.component';

@Component({
  selector: 'monitor-language-list',
  templateUrl: './monitor-language-list.component.html',
  styleUrls: ['./monitor-language-list.component.css']
})
export class MonitorLanguageListComponent implements OnInit {

  @Input() LanguageList!: LanguageObject[];

  constructor() { }

  ngOnInit(): void {
  }

}
