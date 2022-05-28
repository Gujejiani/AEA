import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-we-do-item',
  templateUrl: './what-we-do-item.component.html',
  styleUrls: ['./what-we-do-item.component.scss'],
})
export class WhatWeDoItemComponent implements OnInit {
  @Input() src: string;
  @Input() title: string;
  @Input() text: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  readMoreClicked() {
    this.router.navigate(['about']);
    console.log('read more clicked');
  }
}
