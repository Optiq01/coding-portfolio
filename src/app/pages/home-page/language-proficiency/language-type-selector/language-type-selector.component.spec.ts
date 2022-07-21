import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageTypeSelectorComponent } from './language-type-selector.component';

describe('LanguageTypeSelectorComponent', () => {
  let component: LanguageTypeSelectorComponent;
  let fixture: ComponentFixture<LanguageTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageTypeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
