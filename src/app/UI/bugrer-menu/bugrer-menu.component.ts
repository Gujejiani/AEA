import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { burgerService } from 'src/app/header/burger.service';


@Component({
  selector: 'app-burger-menu',
  templateUrl: './bugrer-menu.component.html',
  styleUrls: ['./bugrer-menu.component.scss']
})
export class BugrerMenuComponent implements OnInit {
  toggle: boolean = false;
  @ViewChild('burger') burger
  constructor(private burgerService :burgerService) { }


  @Output() toggleMenu = new EventEmitter<boolean>()


  ngOnInit(): void {
    this.burgerService.toggle.subscribe(()=>{
      this.burger.nativeElement.checked= false
     this.onToggleMenu()

    })
  }
  onToggleMenu(){
    this.toggle = !this.toggle
    this.toggleMenu.emit(this.toggle)
  }

}
