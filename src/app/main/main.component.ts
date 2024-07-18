import { Component, HostListener } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SelfPresentationComponent } from '../self-presentation/self-presentation.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { MyWorkComponent } from '../my-work/my-work.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, LandingPageComponent, SelfPresentationComponent, SkillsetComponent, MyWorkComponent, ContactMeComponent],
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

  language: string  = 'english';
  landscapeMode: boolean = false;

  switchLanguage() {
    if(this.language == 'english'){
      this.language = 'german';
    }else{
      this.language = 'english';
    }
  }

  checkLandscapeMode(){
    if(window.innerHeight < window.innerWidth && window.innerWidth < 768){
      this.landscapeMode = true;
    }else{
      this.landscapeMode = false;
    }
  }
}