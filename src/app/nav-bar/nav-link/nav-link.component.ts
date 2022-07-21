import { Component, Input, OnInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent implements OnInit {

  @Input() Link! :string;
  Active: boolean = false;

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navService.getCurrentPage().subscribe(a =>{
      if(a === this.Link){ this.Active = true; }
      else{ this.Active = false; }
      console.log(this.Active);
    });
  }

}
