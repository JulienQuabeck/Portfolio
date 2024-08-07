import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: '',component: MainComponent},
    {path: 'landing-Page', component: MainComponent},
    {path: 'Imprint',component: ImprintComponent},
    {path: 'Privacy-Policy', component: PrivacyPolicyComponent}
];