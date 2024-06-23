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
    {
      name: 'HTML',
      url: './assets/img/skillset/html.png',
    },
    {
      name: 'CSS',
      url: './assets/img/skillset/css.png',
    },
    {
      name: 'JavaScript',
      url: './assets/img/skillset/javascript.png',
    },
    {
      name: 'GitHub',
      url: './assets/img/skillset/github.png',
    },
    {
      name: 'API',
      url: './assets/img/skillset/restapi.png',
    },
    {
      name: 'SCRUM',
      url: './assets/img/skillset/scrum.png',
    },
    {
      name: 'TypeScript',
      url: './assets/img/skillset/typescript.png',
    },
    {
      name: 'Angular',
      url: './assets/img/skillset/angular.png',
    },
    {
      name: 'Firebase',
      url: './assets/img/skillset/firebase.png',
    },
    {
      name: 'Materialdesign',
      url: './assets/img/skillset/materialdesign.png'
    },
  ];
}
