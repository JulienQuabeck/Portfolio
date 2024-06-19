import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {

  skills = [
    './assets/img/skillset/html.png',
    './assets/img/skillset/css.png',
    './assets/img/skillset/javascript.png',
    './assets/img/skillset/github.png',
    './assets/img/skillset/restapi.png',
    './assets/img/skillset/scrum.png',
    './assets/img/skillset/typescript.png',
    './assets/img/skillset/angular.png',
    './assets/img/skillset/firebase.png',
    './assets/img/skillset/materialdesign.png'
  ];

}
