import { NgClass, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  http = inject(HttpClient)

  checked = false;

  checkCheckbox() {
    if (this.checked == false) {
      this.checked = true;
      this.showPrivacyPolicyError = false;
    } else {
      this.checked = false;
      this.showPrivacyPolicyError = true;
    }
  }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  checkboxChecked = false;
  showPrivacyPolicyError = false;
  isFocused: any = { 'name': false, 'email': false, 'message': false };

  mailTest = false;

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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.checked && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            //hier alles weitere einfügen (falls gewünscht)
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
            //Button aktiv - was soll passieren, wenn die Mail nicht verschickt werden kann?!

          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.checked && this.mailTest) {
      //hier alles weitere einfügen (falls gewünscht)
      ngForm.resetForm();
    } else if (ngForm.submitted && ngForm.form.valid && !this.checked && this.mailTest) {
      this.showPrivacyPolicyError = true;
    }
  }

  onFocus(id: string) {
    this.isFocused[id] = true;
  }

  onBlur(id: string) {
    this.isFocused[id] = false;
  }
}
