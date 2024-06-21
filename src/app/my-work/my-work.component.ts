import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

projects = [
  {
    title: 'join',
    img: '../../assets/img/projects/join.png',
    skills: {
      skill1:'HTML',
      skill2:'SCSS',
      skill3:'Angular',
      skill4:'TypeScript',
      skill5:'Firebase',
    },
    desciption: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    git: 'www.test.de'
  },
  {
    title: 'El Pollo Loco',
    img: '../../assets/img/projects/epl.png',
    skills: {
      skill1:'HTML',
      skill2:'SCSS',
      skill3:'Javascript',
    },
    desciption: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    git: 'www.test.de'
  }
];

}
