import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateFeatureComponent } from './certificate-feature.component';

describe('CertificateFeatureComponent', () => {
  let component: CertificateFeatureComponent;
  let fixture: ComponentFixture<CertificateFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
