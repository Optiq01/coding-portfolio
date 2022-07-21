import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  CurrentPage: BehaviorSubject<string> = new BehaviorSubject<string>('home');
  MobileToggle: boolean = false;
  MobileMenuStaus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public updatePage(page: string): void{
    this.CurrentPage.next(page);
  }

  public getCurrentPage(): BehaviorSubject<string>{ return this.CurrentPage; }

  public toggleMobileMenu(): void{
    this.MobileToggle = !this.MobileToggle;
    this.MobileMenuStaus.next(this.MobileToggle);
  }

  public getMobileStatus(): BehaviorSubject<boolean>{ return this.MobileMenuStaus; }
}
