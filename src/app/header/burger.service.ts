import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})


export class burgerService {
  toggle = new Subject<void>()


  checked(){
    this.toggle.next()
  }
}
