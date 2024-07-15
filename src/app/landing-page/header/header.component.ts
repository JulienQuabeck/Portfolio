import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  burgerMenuClosed = true;
  language='english';

  openBurgerMenu(){
    if(this.burgerMenuClosed == true){
      this.burgerMenuClosed = false;
    }else{
      this.burgerMenuClosed = true;
    }

  }

  switchLanguage(){
    if(this.language == 'english'){
      this.language = 'german';
    }else{
      this.language = 'english';
    }
  }

}
