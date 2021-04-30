import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do-item',
  templateUrl: './what-we-do-item.component.html',
  styleUrls: ['./what-we-do-item.component.scss'],
})
export class WhatWeDoItemComponent implements OnInit {
  @Input() src: string;
  @Input() title: string;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
