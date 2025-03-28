import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            NgClass,
            NgStyle,
            MatGridListModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  two='twoo';
  a="RESUME";
  x={'color':'#18d26e'};
  aone="CHECK MY RESUME";
  rs="Summary";
  rso="ALICE BARKLEY";
  rsp="Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable";
  re="Education";
  reo="BACHELOR OF COMPUTER APPLICATION";
  repo="Valluvur college of art and science, Karur";
  rept="I have completed my BCA Degree at Valluvur college of art and science under Bharathidasan University ";
  rt="Training Courses";
  rto="FRONTEND WEB DEVELOPMENT";
  rtp="Completed training course in FRONTEND WEB DEVELOPMENT using ANGULAR at AXEXA TECHNOLOGY SOLUTION private limited, Bangalore";
  rl="Skill Sets";
  rlo="SKILL SET";
}
