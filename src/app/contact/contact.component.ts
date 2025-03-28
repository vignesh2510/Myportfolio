import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            NgClass,
            NgStyle,
            MatGridListModule,
            MatIconModule,
            MatFormFieldModule, 
            MatInputModule, 
            MatSelectModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  two='twoo';
  a="CONTACT";
  aone="Contact with me";
  x={'color':'#18d26e'};
  one="My Address";
  onep="32/2 vanjinathan nagar, thanthonimalai, karur 639005";
  otp="Social Profiles";
  othh="Email Me";
  othp="madhavanvignesh@gmail.com";
  ofo="Call Me";
  ofp="96002 47213";
}
