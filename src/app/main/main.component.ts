import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, LandingPageComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
