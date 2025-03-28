import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass,RouterLink,MatGridListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  one="assets/video/pexels-mart-production-7565445 (540p).mp4";
  onee='myvideo'
  onh="I'm Vigneshwaran";
  onp="Front End Developer";
}
