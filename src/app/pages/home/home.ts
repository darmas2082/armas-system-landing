import { Component } from '@angular/core';

import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';

import { Hero } from './hero/hero';
import { Services } from './services/services';
import { About } from './about/about';
import { Technologies } from './technologies/technologies';
import { Process } from './process/process';
import { Projects } from './projects/projects';
import { Testimonials } from './testimonials/testimonials';
import { Cta } from './cta/cta';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Footer,
    Hero,
    Services,
    About,
    Technologies,
    Process,
    Projects,
    Testimonials,
    Cta
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}