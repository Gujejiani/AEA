import {
	AfterViewInit,
	Directive,
	ElementRef,
	EventEmitter,
	Output,
	PLATFORM_ID,
	Inject,
	OnDestroy,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({
	selector: '[visible]',
})
export class VisibleDirective implements AfterViewInit, OnDestroy {

	@Output() onVisible: EventEmitter<void> = new EventEmitter();

	@Output() onHide: EventEmitter<void> = new EventEmitter();
	private observer?: IntersectionObserver;

	constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: any) {}

	private checkForIntersection = (entries: IntersectionObserverEntry[]): void => {
		entries.forEach((entry: IntersectionObserverEntry) => {
			if (this.checkIfIntersecting(entry)) {
    
				this.onVisible.emit();
			} else {
				this.onHide.emit();
			}
		});
	};

	private checkIfIntersecting(entry: IntersectionObserverEntry): boolean {
    // console.log(entry.target, this.el.nativeElement)
		return entry.isIntersecting && entry.target === this.el.nativeElement;
	}

	ngAfterViewInit(): void {
		let config = {
      root: null,
			rootMargin: '0px',
			threshold: 0

		};

		if (isPlatformServer(this.platformId)) {
			return;
		}


		this.observer = new IntersectionObserver((entries) => {
			this.checkForIntersection(entries);
		}, config);

		this.observer.observe(this.el.nativeElement);
	}

	ngOnDestroy(): void {
		if (this.observer) {
			this.observer.unobserve(this.el.nativeElement);
			this.observer.disconnect();
		}
	}
}
