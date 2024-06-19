import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SelfPresentationComponent } from '../self-presentation/self-presentation.component';
import { SkillsetComponent } from '../skillset/skillset.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, LandingPageComponent, SelfPresentationComponent, SkillsetComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
