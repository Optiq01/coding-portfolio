import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorLanguageListComponent } from './monitor-language-list.component';

describe('MonitorLanguageListComponent', () => {
  let component: MonitorLanguageListComponent;
  let fixture: ComponentFixture<MonitorLanguageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorLanguageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorLanguageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
