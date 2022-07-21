import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLanguageListComponent } from './mobile-language-list.component';

describe('MobileLanguageListComponent', () => {
  let component: MobileLanguageListComponent;
  let fixture: ComponentFixture<MobileLanguageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileLanguageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileLanguageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
