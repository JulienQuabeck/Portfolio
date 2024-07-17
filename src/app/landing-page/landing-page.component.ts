import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SocialMediaComponent } from '../shared/social-media/social-media.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, SocialMediaComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  @Output() sentlanguage = new EventEmitter;

  language = 'english';

  switchLanguage() {
    if(this.language == 'english'){
      this.language = 'german';
    }else{
      this.language = 'english';
    }
    this.sendLanguageToParent();
  }

  sendLanguageToParent() {
    this.sentlanguage.emit();
  }

}
