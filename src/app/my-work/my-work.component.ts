import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

  @Input() language = '';

  projects = [
    {
      title: 'Join',
      img: './assets/img/projects/JoinFrame.png',
      skills: 'HTML | SCSS | Angular | TypeScript | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, and assign users and categories. ',
      descriptionGer: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      git: 'https://github.com/JulienQuabeck/Join_Portfolio',
      url: 'https://join.julien-quabeck.de/html/index.html'
    },
    {
      title: 'El Pollo Loco',
      img: './assets/img/projects/EPLFrame.png',
      skills: 'HTML | CSS | Javascript',
      description: 'Jump, run, and throw game based on an object-oriented approach. Help Pepe find coins and tabasco salsa to fight against the crazy hen.',
      descriptionGer: '"jump and run"-Spiel, dass auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      git: 'https://github.com/JulienQuabeck/EPL_Portfolio',
      url: 'https://epl.julien-quabeck.de/index.html'
    },
    {
      title: 'Pokemon-API',
      img: './assets/img/projects/PokemonFrame.png',
      skills: 'HTML | SCSS | Angular | TypeScript | API',
      description: 'A Pokedex like it is used in the famous anime series Pokemon.',
      descriptionGer: 'Ein Pokedex, wie er in der berühmten Anime-Serie Pokemon verwendet wird.',
      git: 'https://github.com/JulienQuabeck/newPokemonAPI',
      url: 'https://pokedex.julien-quabeck.de/index.html'
    }
  ];
}
