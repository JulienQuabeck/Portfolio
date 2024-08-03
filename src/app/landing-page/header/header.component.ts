import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

//ViewChild, ElementRef

export class HeaderComponent {

  burgerMenuClosed = true;
  language = 'english';

  //implements AfterViewInit
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }

  /**
   * This function changes the language after clicking on the language flag in the header component and changes the language
   */
  changeLanguage() {
    let language = localStorage.getItem('language') || 'en';
    if (language == 'en') {
      language = 'de';
    } else {
      language = 'en';
    }
    this.translateService.use(language);
    localStorage.setItem('language', language);
  }

  /**
   * This function opens/closes the burger menu depending on whether it is already open or not
   */
  openBurgerMenu() {
    if (this.burgerMenuClosed == true) {
      this.burgerMenuClosed = false;
    } else {
      this.burgerMenuClosed = true;
    }
  }

}
