import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-about',
  imports: [],
  templateUrl: './home-about.html',
  styleUrl: './home-about.css',
})
export class HomeAbout {

  @ViewChild('aboutSection')
  aboutSection!: ElementRef<HTMLElement>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.aboutSection.nativeElement;

    setTimeout(() => {
      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view');
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            observer.disconnect();
          }
        },
        {
          threshold: 0.15
        }
      );

      observer.observe(el);

    }, 150);
  }
}
