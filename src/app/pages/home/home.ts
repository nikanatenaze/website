import { Component } from '@angular/core';
import {HomeHero} from './sections/home-hero/home-hero';

@Component({
  selector: 'app-home',
  imports: [
    HomeHero
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
