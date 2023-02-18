import { Component, Input, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss',


],
changeDetection: ChangeDetectionStrategy.OnPush,
encapsulation: ViewEncapsulation.None
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() loaded = new EventEmitter<void>()
  imageLoaded: boolean;
  @Input() src: string




  onImageLoad(){
    this.imageLoaded =true
  }



}
