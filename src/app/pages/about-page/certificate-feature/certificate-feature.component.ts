import { Component, Input, OnInit } from '@angular/core';
import { CertificationItem } from '../about-page.component';



@Component({
  selector: 'certificate-feature',
  templateUrl: './certificate-feature.component.html',
  styleUrls: ['./certificate-feature.component.css']
})
export class CertificateFeatureComponent implements OnInit {

  @Input() Certificate!: CertificationItem;

  constructor() { }

  ngOnInit(): void {
  }

}
