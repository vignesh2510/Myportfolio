import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink,
            RouterOutlet,
            NgClass,
            NgStyle,
            MatProgressBarModule,
            MatGridListModule
          ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  tiles: Tile[] = [
    {text: 'Birthday:25 October 2002', cols: 2, rows: 1,},
    {text: 'Age: 21', cols: 2, rows: 1, },
    {text: 'Email:madhavanvignesh5', cols: 2, rows: 1,},
    {text: 'Website:', cols: 2, rows: 1, },
    {text: 'Phone: 91-9600247213', cols: 2, rows: 1, },
    {text: 'City: Karur', cols: 2, rows: 1, },
    {text: 'FreeLanca: avaliable', cols: 2, rows: 1, },
    {text: 'Degree: BCA', cols: 2, rows: 1, },
  ];
  two='twoo';
  a="ABOUT";
  x={'color':'#18d26e'};
  aone="LEARN MORE ABOUT ME";
  ai="assets/image/vicky.jpeg";
  thh="thhs";
  ask="Skills";
  asks={'color':'#18d26e'};
}
