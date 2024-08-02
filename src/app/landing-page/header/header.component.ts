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
//implements AfterViewInit
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);  
  }

  changeLanguage(){
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


  // @ViewChild('self-presentation', { static: false }) section1!: ElementRef;
  // @ViewChild('skillset', { static: false }) section2!: ElementRef;
  // @ViewChild('mywork', { static: false }) section3!: ElementRef;
  // @ViewChild('contact', { static: false }) section4!: ElementRef;

  // ngAfterViewInit() {
  //   // ViewChilds sind nun initialisiert
  // }

  // scrollToSection(sectionId: string): void {
  //   const sectionMap: { [key: string]: ElementRef } = {
  //     section1: this.section1,
  //     section2: this.section2,
  //     section3: this.section3,
  //     section4: this.section4
  //   };

  //   const element = sectionMap[sectionId]?.nativeElement;
  //   if (element) {
  //     const headerOffset = 117; // Höhe des Headers
  //     const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  //     const offsetPosition = elementPosition - headerOffset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //     });
  //   }
  // }




}
