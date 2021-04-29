import { AfterViewInit, Component, OnInit } from '@angular/core';
interface Partner {
  src: string;
  link: string;
}
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit, AfterViewInit {
  constructor() {}
  currentSlide: number = 0;
  partners: String[] = [
    './assets/partners/partner-1.svg',
    './assets/partners/partner-2.svg',
    './assets/partners/partner-3.svg',
    './assets/partners/partner-4.svg',
    './assets/partners/partner-5.svg',
    './assets/partners/partner-6.svg',
    './assets/partners/partner-7.svg',
    './assets/partners/partner-8.svg',
    './assets/partners/partner-9.svg',
    './assets/partners/partner-10.svg',
    './assets/partners/partner-11.svg',
    './assets/partners/partner-12.svg',
    './assets/partners/partner-13.svg',
  ];
  Partners: Partner[] = [
    {
      src: './assets/partners/partner-1.svg',
      link: 'www.ateliereuropeo.eu',
    },
  ];
  ngOnInit(): void {}
  ngAfterViewInit() {
    const partners = document.querySelectorAll('.partners__section__partner');
    partners.forEach((partner: HTMLElement, i) => {
      partner.style.transform = `translateX(${170 * i}%)`;
    });
  }
  showPrevious() {
    this.moveSlider('left');
    console.log('left');
  }
  showNext() {
    this.moveSlider('right');
  }

  moveSlider(side: string) {
    const maxSlides = this.partners.length;

    if (side === 'right') {
      if (maxSlides - 3 === this.currentSlide) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
      this.goToSlide(this.currentSlide);
    }
    if (side === 'left') {
      if (this.currentSlide === 0) {
        console.log('dadada');
        this.currentSlide = maxSlides - 3;
      } else {
        this.currentSlide--;
      }
      this.goToSlide(this.currentSlide);
    }
    console.log(this.currentSlide);
  }

  goToSlide(slideIndex: number) {
    const partners = document.querySelectorAll('.partners__section__partner');
    partners.forEach((partner: HTMLElement, i) => {
      partner.style.transform = `translateX(${170 * (i - slideIndex)}%)`;
    });
  }
}
