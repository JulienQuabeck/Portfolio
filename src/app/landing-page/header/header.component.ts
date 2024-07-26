import { Component, EventEmitter, inject, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  private translateService = inject(TranslateService);

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);  
  }

  changeLanguage(){
    debugger
    let language = localStorage.getItem('language') || 'en';
    if(language == 'en'){
      language = 'de';
    }else{
      language = 'en';
    }
    this.translateService.use(language);
    localStorage.setItem('language', language);
  }

  burgerMenuClosed = true;
  language = 'english';

  openBurgerMenu() {
    if (this.burgerMenuClosed == true) {
      this.burgerMenuClosed = false;
    } else {
      this.burgerMenuClosed = true;
    }

  }
}
