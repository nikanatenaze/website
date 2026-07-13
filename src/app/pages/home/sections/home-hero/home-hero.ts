import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeHero implements AfterViewInit {
  @ViewChild('splineViewer') splineViewer!: ElementRef;

  isSplineLoading = true;

  ngAfterViewInit(): void {
    const el = this.splineViewer.nativeElement;
    el.addEventListener('load', () => {
      this.isSplineLoading = false;
    });
  }
}