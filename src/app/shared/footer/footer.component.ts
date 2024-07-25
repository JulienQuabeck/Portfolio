import { Component, Input } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMediaComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @Input () language  = '';

}
