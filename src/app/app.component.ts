import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from './nav-bar/nav.service';

export const LINKS: string[] = [
  'home', 'about', 'projects', 'contact'
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coding-portfolio';
  Links!: string[];
  CurrentRoute!: string;
  MobileMenu!: boolean;

  constructor(private router: Router, private page: NavService){}

  ngOnInit(): void {
    this.Links = LINKS;
    this.page.getCurrentPage().subscribe(a => { this.updateRoute(a);});
    this.page.getMobileStatus().subscribe(a => { this.MobileMenu = a; });
  }

  public updateRoute(path: string): void {
    this.router.navigate([path]);
    window.scrollTo(0, 0);
  }
}
