import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from '../shared/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[fadeInOutAnimation]
})
export class HomeComponent implements OnInit {

  constructor() { }
  isVisible =false
  reviewVisible =false
  partnerVisible =false
  projectsVisible=false
  welcomeVisible= false
  whatWeDoVisible=false
  ngOnInit(): void {
  }
  videoIsVisible(){
    this.isVisible = true
  }

  reviewIsVisible(){
    this.reviewVisible =true
  }


  partnerIsVisible(){
    this.partnerVisible =true
  }

  projectsIsVisible(){
    this.projectsVisible =true
  }


  welcomeIsVisible(){

    this.welcomeVisible =true
  }

  whatWeDoIsVisible(){
    this.whatWeDoVisible =true
  }




}
