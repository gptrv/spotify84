import { Routes } from '@angular/router';
import { MainPage } from './children/standalone/pages/main/main.page';
import { AboutPage } from './children/standalone/pages/about/about.page';

export const routes: Routes = [
    { path: '', component: MainPage },
    { path: 'about', component: AboutPage },
];
