import { Routes } from '@angular/router';
import { MainPage } from './children/standalone/pages/main/main.page';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainPage }
];
