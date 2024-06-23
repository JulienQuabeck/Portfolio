import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  checked = false;

  checkCheckbox(){
    if(this.checked == false){
      this.checked = true;
    }else{
      this.checked = false;
    }
  }

}
