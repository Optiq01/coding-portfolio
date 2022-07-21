import { Component, Input, OnInit } from '@angular/core';
import { NavService } from '../nav-bar/nav.service';

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {

  @Input() Links!: string[];

  constructor(private page: NavService) { }

  ngOnInit(): void {
  }

  public updatePage(path:string): void {
    this.page.updatePage(path);
    this.page.toggleMobileMenu();
  }

}
