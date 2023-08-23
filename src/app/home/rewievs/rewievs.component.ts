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
        'It was an amazing experience for me, Thanks to the AEA for this opportunity',
      src: './assets/review-1.jpg',
    },
    {
      name: 'Sameh Ben Hmida',
      description:
        ' This intercultural exchange has helped me share experience with other people and discover new amazing country and new ways of dealing with young people.',
      src: './assets/review-22.jpg',
    },
    {
      name: 'Marine Desbrun',
      description:
        '  I spent colorful days in a colorful country, the knowledge gained during the project will be useful to me  ',
      src: './assets/review-3.jpg',
    },
    {
      name: 'Emiel Bakker',
      description:
        'It was an experience never to be forgotten. Not only did I meet amazing people, but I also learned a lot from them. This gained experience enriched me as a person and would not have been possible without the project',
      src: './assets/review-44.jpg',
    },
  ];
  showPrevious() {

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
      review.style.transform = `translateX(${200 * (i - slideIndex)}%)`;
    });
  }
}
