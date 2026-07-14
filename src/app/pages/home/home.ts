import { Component } from '@angular/core';
import {HomeHero} from './sections/home-hero/home-hero';
import {HomeSkills} from './sections/home-skills/home-skills';
import { HomeProjects } from './sections/home-projects/home-projects';
import { HomeAbout } from "./sections/home-about/home-about";

@Component({
  selector: 'app-home',
  imports: [
    HomeHero,
    HomeSkills,
    HomeProjects,
    HomeAbout
],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
