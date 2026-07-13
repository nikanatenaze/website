import {
  Component,
  signal,
  Inject,
  PLATFORM_ID,
  HostListener
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './shared/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('website');

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  @HostListener('window:beforeunload')
  onBeforeUnload(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }
}
