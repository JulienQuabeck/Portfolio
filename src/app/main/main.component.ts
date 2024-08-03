import { Component, HostListener } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SelfPresentationComponent } from '../self-presentation/self-presentation.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { MyWorkComponent } from '../my-work/my-work.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, LandingPageComponent, SelfPresentationComponent, SkillsetComponent, MyWorkComponent, ContactMeComponent, TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor() {
    this.checkLandscapeMode();

    window.addEventListener('resize', () => this.checkLandscapeMode());
    window.addEventListener('orientationchange', () => this.checkLandscapeMode());
    document.addEventListener('DOMContentLoaded', () => this.checkLandscapeMode());
  }

  landscapeMode: boolean = false;

  /**
  * This function checks, if the mobile device is in langsacpe mode, if yes it will display an information to turn the device
  */
  checkLandscapeMode() {
    if (window.innerHeight < window.innerWidth && window.innerWidth < 768) {
      this.landscapeMode = true;
    } else {
      this.landscapeMode = false;
    }
  }
}