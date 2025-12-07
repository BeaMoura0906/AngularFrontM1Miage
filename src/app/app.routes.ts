import { Routes } from '@angular/router';
import { Assignments } from './assignments/assignments';
import { AddAssignment } from './assignments/add-assignment/add-assignment';
import { AssignmentDetail } from './assignments/assignment-detail/assignment-detail';
import { EditAssignment } from './assignments/edit-assignment/edit-assignment';
import { AuthGuard } from './shared/auth-guard';
import { Login } from './auth/login/login';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Assignments },
    { path: 'add', component: AddAssignment },
    { path: 'assignment/:id', component: AssignmentDetail },
    { path: 'login', component: Login },
    { 
        path: 'assignment/:id/edit', 
        component: EditAssignment, 
        canActivate: [AuthGuard]
    },
];
