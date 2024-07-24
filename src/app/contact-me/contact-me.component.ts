import { NgClass, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  @Input () language = '';

  http = inject(HttpClient)

  checked = false;

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  checkboxChecked = false;
  showPrivacyPolicyError = false;
  isFocused: any = { 'name': false, 'email': false, 'message': false };
  mailTest = true;
  mailSuccessfullySent = false;

  post = {
    endPoint: 'http://julien-quabeck.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * This function checks, if the checkbox was checked or not
   */
  checkCheckbox() {
    if (this.checked == false) {
      this.checked = true;
      this.showPrivacyPolicyError = false;
    } else {
      this.checked = false;
      this.showPrivacyPolicyError = true;
    }
  }

  /**
   * This function sends an e-mail to my e-mail adress
   * @param ngForm 
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.checked && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);

          },
          complete: () => this.mailSent(),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.checked && this.mailTest) {
      this.mailSent();
      ngForm.resetForm();
    } else if (ngForm.submitted && ngForm.form.valid && !this.checked && this.mailTest) {
      this.showPrivacyPolicyError = true;
    }
  }

  /**
   * This function sets a variable from false to true for 5 seconds as soon as an E-mail was successfully sent
   */
  mailSent() {
    this.mailSuccessfullySent = true;
    setTimeout(() => {
      this.mailSuccessfullySent = false;
    }, 5000);
  }

  /**
   * This function sets the var from false to true of the focused input-field
   * @param id = string (id of focused i-field)
   */
  onFocus(id: string) {
    this.isFocused[id] = true;
  }

  /**
   * This function sets the var from true to false of the focused input-field
   * @param id = string (id of focused i-field)
   */
  onBlur(id: string) {
    this.isFocused[id] = false;
  }
}
