import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-self-presentation',
  standalone: true,
  imports: [],
  templateUrl: './self-presentation.component.html',
  styleUrl: './self-presentation.component.scss'
})
export class SelfPresentationComponent {

@Input() language = '';

}
