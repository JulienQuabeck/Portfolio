import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../landing-page/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  landscapeMode: boolean = false;

  constructor() {
    this.checkLandscapeMode();

    window.addEventListener('resize', () => this.checkLandscapeMode());
    window.addEventListener('orientationchange', () => this.checkLandscapeMode());
    document.addEventListener('DOMContentLoaded', () => this.checkLandscapeMode());
}

  checkLandscapeMode(){
    if(window.innerHeight < window.innerWidth && window.innerWidth < 768){
      this.landscapeMode = true;
    }else{
      this.landscapeMode = false;
    }
  }

}
