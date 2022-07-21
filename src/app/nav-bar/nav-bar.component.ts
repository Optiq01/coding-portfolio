import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavService } from './nav.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() NewLink: EventEmitter<string> = new EventEmitter<string>();
  

  @Input() Links!: string[];

  constructor(private page: NavService) { }

  ngOnInit(): void {
    //this.Links  = LINKS;
  }

  updateLink(path: string): void{
    this.page.updatePage(path);
    //this.NewLink.emit(path);
  }

  public toggleMobileNav():void{ this.page.toggleMobileMenu(); }

}
