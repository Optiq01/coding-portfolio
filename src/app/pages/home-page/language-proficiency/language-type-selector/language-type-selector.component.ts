import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguageType } from '../language-proficiency.component';

@Component({
  selector: 'language-type-selector',
  templateUrl: './language-type-selector.component.html',
  styleUrls: ['./language-type-selector.component.css']
})
export class LanguageTypeSelectorComponent implements OnInit {

  CurrentList: LanguageType = 'all';
  @Output() NewList: EventEmitter<LanguageType> = new EventEmitter<LanguageType>();

  constructor() { }

  ngOnInit(): void {
  }

  public updateList(name: LanguageType): void{
    this.CurrentList = name;
    this.NewList.emit(name);
  }

}
