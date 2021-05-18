import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit {
  @Input() src: string;
  @Input() url: string;
  constructor() {}

  ngOnInit(): void {}
}
