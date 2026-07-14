import { ViewportScroller } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  AfterViewInit,
  ViewChild,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeHero implements AfterViewInit {
  @ViewChild('splineViewer') splineViewer!: ElementRef;
  @ViewChild('cursorGlow') cursorGlow!: ElementRef<HTMLDivElement>;

  isSplineLoading = true;

  constructor(private viewportScroller: ViewportScroller) { }

  ngAfterViewInit(): void {
    const el = this.splineViewer.nativeElement;
    el.addEventListener('load', () => {
      this.isSplineLoading = false;
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.cursorGlow) return;
    if (window.innerWidth <= 1024) return;

    const glow = this.cursorGlow.nativeElement;
    glow.style.setProperty('--x', `${event.clientX}px`);
    glow.style.setProperty('--y', `${event.clientY}px`);

    if (!glow.classList.contains('active')) {
      glow.classList.add('active');
    }
  }

  @HostListener('document:mouseleave')
  onMouseLeave(): void {
    if (this.cursorGlow) {
      this.cursorGlow.nativeElement.classList.remove('active');
    }
  }

  scrollToAbout(): void {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  }
}