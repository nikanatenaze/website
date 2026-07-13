import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements AfterViewInit {

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