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

  translateValue: number = 160;
  // partners: String[] = [
  //   './assets/partners/partner-1.svg',
  //   './assets/partners/partner-2.svg',
  //   './assets/partners/partner-3.svg',
  //   './assets/partners/partner-4.svg',
  //   './assets/partners/partner-5.svg',
  //   './assets/partners/partner-6.svg',
  //   './assets/partners/partner-7.svg',
  //   './assets/partners/partner-8.svg',
  //   './assets/partners/partner-9.svg',
  //   './assets/partners/partner-10.svg',
  //   './assets/partners/partner-11.svg',
  //   './assets/partners/partner-12.svg',
  //   './assets/partners/partner-13.svg',
  // ];
  partners: Partner[] = [
    {
      src: './assets/partners/partner-1.svg',
      link: 'https://www.ateliereuropeo.eu',
    },
    {
      src: './assets/partners/partner-2.svg',
      link: 'https://www.bironlus.eu/',
    },
    {
      src: './assets/partners/partner-3.svg',
      link: 'https://hors-pistes.org/',
    },
    {
      src: './assets/partners/partner-4.svg',
      link: 'https://mladiinfo.sk/',
    },
    {
      src: './assets/partners/partner-5.svg',
      link: 'https://www.ccab.tn/',
    },
    {
      src: './assets/partners/partner-6.svg',
      link: 'http://www.cultureclash4u.com/',
    },
    {
      src: './assets/partners/partner-7.svg',
      link: 'https://ngo-stella.org/',
    },
    {
      src: './assets/partners/partner-8.svg',
      link: 'https://www.eu.sumy.ua/',
    },
    {
      src: './assets/partners/partner-9.svg',
      link: 'https://www.facebook.com/youthhubcyprus/',
    },
    {
      src: './assets/partners/partner-10.svg',
      link: 'https://www.bulgarianyf.eu/',
    },
    {
      src: './assets/partners/partner-11.svg',
      link: 'https://www.hyvarila.com/',
    },
    {
      src: './assets/partners/partner-12.svg',
      link: 'https://www.marta.lv/',
    },
    {
      src: './assets/partners/partner-13.svg',
      link: 'https://www.hellasforus.com/',
    },
  ];
  ngOnInit(): void {}
  ngAfterViewInit() {
    const partners = document.querySelectorAll('.partners__section__partner');
    partners.forEach((partner: HTMLElement, i) => {
      partner.style.transform = `translateX(${this.translateValue * i}%)`;
    });
  }
  showPrevious() {
    this.moveSlider('left');

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

        this.currentSlide = maxSlides - 3;
      } else {
        this.currentSlide--;
      }
      this.goToSlide(this.currentSlide);
    }

  }

  goToSlide(slideIndex: number) {
    const partners = document.querySelectorAll('.partners__section__partner');
    partners.forEach((partner: HTMLElement, i) => {
      partner.style.transform = `translateX(${
        this.translateValue * (i - slideIndex)
      }%)`;
    });
  }
}
