import { Routes } from '@angular/router';
import { Assignments } from './assignments/assignments';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Assignments },
];
