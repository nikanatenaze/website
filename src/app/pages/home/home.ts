import { Component } from '@angular/core';
import {HomeHero} from './sections/home-hero/home-hero';
import {HomeSkills} from './sections/home-skills/home-skills';
import { HomeProjects } from './sections/home-projects/home-projects';
import { About } from "./sections/about/about";

@Component({
  selector: 'app-home',
  imports: [
    HomeHero,
    HomeSkills,
    HomeProjects,
    About
],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
