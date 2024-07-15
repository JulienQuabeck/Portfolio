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
      title: 'Join',
      img: './assets/img/projects/JoinFrame.png',
      skills: 'HTML | SCSS | Angular | TypeScript | Firebase',
      desciption: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      git: 'https://github.com/JulienQuabeck/Join_Portfolio',
      url: 'http://join.julien-quabeck.de/html/index.html'
    },
    {
      title: 'El Pollo Loco',
      img: './assets/img/projects/EPLFrame.png',
      skills: 'HTML | CSS | Javascript',
      desciption: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      git: 'https://github.com/JulienQuabeck/EPL_Portfolio',
      url: 'https://julien-quabeck.developerakademie.net/EPL/index.html'
    },
    {
      title: 'Pokemon-API',
      img: './assets/img/projects/PokemonFrame.png',
      skills: 'HTML | SCSS | Angular | TypeScript | API',
      desciption: 'A self created Pokedex like in the famous TV-Show Pokemon',
      git: 'https://github.com/JulienQuabeck/newPokemonAPI',
      url: 'http://pokedex.julien-quabeck.de/index.html'
    }
  ];
}
