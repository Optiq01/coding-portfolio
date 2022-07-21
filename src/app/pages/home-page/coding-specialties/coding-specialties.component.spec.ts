import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingSpecialtiesComponent } from './coding-specialties.component';

describe('CodingSpecialtiesComponent', () => {
  let component: CodingSpecialtiesComponent;
  let fixture: ComponentFixture<CodingSpecialtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingSpecialtiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingSpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
