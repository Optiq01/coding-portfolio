import { Component, OnInit } from '@angular/core';

export type LanguageType = 'all' | 'markup' |  'styling' | 'data' | 'functional' | 'platform' | 'library' | 'machining';

export interface LanguageObject {
  name: string;
  experience: number;
  usage: number;
  languageType: LanguageType[];
}

const LANGUAGES: LanguageObject[] = [
  {
    name: 'HTML',
    experience: 25,
    usage: 10,
    languageType: ['markup'] 
  },
  {
    name: 'SVG',
    experience: 18,
    usage: 10,
    languageType: ['markup']
  },
  {
    name: 'CSS',
    experience: 25,
    usage: 10,
    languageType: ['styling']
  },
  {
    name: 'SASS',
    experience: 10,
    usage: 3,
    languageType: ['styling']
  },
  {
    name: 'Javascript',
    experience: 5,
    usage: 8,
    languageType: ['functional']
  },
  {
    name: 'Typescript',
    experience: 6,
    usage: 10,
    languageType: ['functional']
  },
  {
    name: 'JSON',
    experience: 7,
    usage: 10,
    languageType: ['data']
  },
  {
    name: 'SQL',
    experience: 10,
    usage: 3,
    languageType: ['data']
  },
  {
    name: 'Angular',
    experience: 6,
    usage: 10,
    languageType: ['platform', 'functional']
  },
  {
    name: 'JQuery',
    experience: 9,
    usage: 0,
    languageType: ['platform', 'functional']
  },
  {
    name: 'React',
    experience: 5,
    usage: 2,
    languageType: ['library', 'functional', 'platform']
  },
  {
    name: 'Vue',
    experience: 2,
    usage: 2,
    languageType: ['functional', 'platform']
  },
  {
    name: 'JSX',
    experience: 5,
    usage: 2,
    languageType: ['markup']
  },
  {
    name: 'TSX',
    experience: 5,
    usage: 7,
    languageType: ['markup']
  },
  {
    name: 'NestJS',
    experience: 5,
    usage: 7,
    languageType: ['functional', 'platform']
  },
  {
    name: 'Bootstrap',
    experience: 11,
    usage: 2,
    languageType: ['styling', 'platform']
  },
  {
    name: 'PHP',
    experience: 13,
    usage: 2,
    languageType: ['markup', 'functional']
  },
  {
    name: 'Redux',
    experience: 5,
    usage: 1,
    languageType: ['functional', 'data']
  },
  {
    name: 'NGXS',
    experience: 4,
    usage: 10,
    languageType: ['functional', 'data']
  },
  {
    name: 'GCode',
    experience: 2,
    usage: 8,
    languageType: ['machining']
  }
]

@Component({
  selector: 'language-proficiency',
  templateUrl: './language-proficiency.component.html',
  styleUrls: ['./language-proficiency.component.css']
})
export class LanguageProficiencyComponent implements OnInit {

  Languages! : LanguageObject[];
  CurrentList! : LanguageObject[];

  constructor() { }

  ngOnInit(): void {
    this.Languages = LANGUAGES;
    this.CurrentList = LANGUAGES;
  }

  public updateLanguageList(list: LanguageType): void{
    let newList: LanguageObject[] = [];

    if(list === 'all'){ newList = [...this.Languages]}
    else{
      this.Languages.forEach(a=>{
        if(a.languageType.includes(list)){ newList.push(a); }
      });
    }
    this.CurrentList = newList;
  }

}
