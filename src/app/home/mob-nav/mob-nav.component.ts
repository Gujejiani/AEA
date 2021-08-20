import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob-nav',
  templateUrl: './mob-nav.component.html',
  styleUrls: ['./mob-nav.component.scss']
})
export class MobNavComponent implements OnInit {

  constructor() { }
  @Input() show: boolean
  ngOnInit(): void {
  }

}
