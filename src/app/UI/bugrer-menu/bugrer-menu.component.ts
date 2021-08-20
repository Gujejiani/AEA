import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-burger-menu',
  templateUrl: './bugrer-menu.component.html',
  styleUrls: ['./bugrer-menu.component.scss']
})
export class BugrerMenuComponent implements OnInit {
  toggle: boolean = false
  constructor() { }


  @Output() toggleMenu = new EventEmitter<boolean>()


  ngOnInit(): void {
  }
  onToggleMenu(){
    this.toggle = !this.toggle
    this.toggleMenu.emit(this.toggle)
  }

}
