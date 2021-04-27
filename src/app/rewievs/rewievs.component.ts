import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './rewievs.component.html',
  styleUrls: ['./rewievs.component.scss'],
})
export class RewievsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  showPrevious() {
    console.log('previous');
  }

  showNext() {
    console.log('next');
  }
}
