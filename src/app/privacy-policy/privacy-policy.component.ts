import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../landing-page/header/header.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
