import { Component } from '@angular/core';
import { HeaderComponent } from '../landing-page/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  landscapeMode: boolean = false;

  constructor() {
    this.checkLandscapeMode();

    window.addEventListener('resize', () => this.checkLandscapeMode());
    window.addEventListener('orientationchange', () => this.checkLandscapeMode());
    document.addEventListener('DOMContentLoaded', () => this.checkLandscapeMode());
}

/**
 * This function checks, if the mobile device is in langsacpe mode, if yes it will display an information to turn the device
 */
  checkLandscapeMode(){
    if(window.innerHeight < window.innerWidth && window.innerWidth < 768){
      this.landscapeMode = true;
    }else{
      this.landscapeMode = false;
    }
  }
}
