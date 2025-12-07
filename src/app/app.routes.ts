import { Routes } from '@angular/router';
import { Assignments } from './assignments/assignments';
import { AddAssignment } from './assignments/add-assignment/add-assignment';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Assignments },
    { path: 'add', component: AddAssignment },
];
