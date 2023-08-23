import { Directive, ElementRef, Input, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[imageLoad]',
})
export class imageLoadDirective {
  @Input('imageLoad') src: string;

  constructor(private element: ElementRef) {}


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    if ('src' in changes) {
      const currentValue = changes['src'].currentValue;
      const previousValue = changes['src'].previousValue;
      console.log(`myInput changed from ${previousValue} to ${currentValue}`);

      if(!currentValue){
        // this.element.nativeElement.setAttribute('src', './assets/projects/project-11.jpg');
      }
    }
  }

  ngAfterViewInit() {
    console.log('am loaded')
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       this.element.nativeElement.setAttribute('src', this.src);
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // });

    // observer.observe(this.element.nativeElement);
  }
}
