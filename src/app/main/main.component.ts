import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SelfPresentationComponent } from '../self-presentation/self-presentation.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { MyWorkComponent } from '../my-work/my-work.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, LandingPageComponent, SelfPresentationComponent, SkillsetComponent, MyWorkComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
