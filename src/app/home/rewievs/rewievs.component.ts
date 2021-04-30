import { AfterViewInit, Component, OnInit } from '@angular/core';
interface Reviewer {
  name: string;
  description: string;
  src: string;
}
@Component({
  selector: 'app-reviews',
  templateUrl: './rewievs.component.html',
  styleUrls: ['./rewievs.component.scss'],
})
export class RewievsComponent implements OnInit, AfterViewInit {
  constructor() {}
  currentSlide: number = 2;
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.goToSlide(2);
  }
  reviewers: Reviewer[] = [
    {
      name: 'Med Habib',
      description:
        'It was amazing experience for me, Thanks to the AEA for this opportunity',
      src: './assets/review-1.jpg',
    },
    {
      name: 'Sameh Ben Hmida',
      description:
        'It was amazing experience for me, Thanks to the AEA for this opportunity',
      src: './assets/review-2.jpg',
    },
    {
      name: 'Marine Desbrun',
      description:
        'It was amazing experience for me, Thanks to the AEA for this opportunity',
      src: './assets/review-3.jpg',
    },
    {
      name: 'Emiel van Kesterb',
      description:
        'It was amazing experience for me, Thanks to the AEA for this opportunity',
      src: './assets/review-4.jpg',
    },
  ];
  showPrevious() {
    console.log('previous');
    this.moveSlider('left');
  }
  showNext() {
    this.moveSlider('right');
  }

  moveSlider(side: string) {
    const maxSlides = this.reviewers.length;

    if (side === 'right') {
      if (maxSlides - 1 === this.currentSlide) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
      this.goToSlide(this.currentSlide);
    }
    if (side === 'left') {
      if (this.currentSlide === 0) {
        console.log('dadada');
        this.currentSlide = maxSlides - 1;
      } else {
        this.currentSlide--;
      }
      this.goToSlide(this.currentSlide);
    }
  }
  goToSlide(slideIndex: number) {
    const reviews = document.querySelectorAll('.reviewers');
    reviews.forEach((review: HTMLElement, i) => {
      review.style.transform = `translateX(${100 * (i - slideIndex)}%)`;
    });
  }
}
