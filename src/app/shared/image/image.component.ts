import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss',

],
encapsulation: ViewEncapsulation.None
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageLoaded: boolean;
  @Input() src: string

  @Input() className=''


  onImageLoad(){
    this.imageLoaded =true
  }

  onImageError(){
    this.imageLoaded =false
  }

}
