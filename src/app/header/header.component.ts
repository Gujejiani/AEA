import { Component, OnInit } from '@angular/core';
import { burgerService } from './burger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggle: boolean
  constructor(private burgerService :burgerService) { }

  ngOnInit(): void {
  }
  onToggleMenu(toggle: boolean){
    this.toggle = toggle
  }

  onOverlayClicked(){
    this.burgerService.checked()
  }
}
