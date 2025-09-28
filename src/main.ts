import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router'; 
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Assignments } from './app/assignments/assignments';
import { Component } from '@angular/core';

@Component({ standalone: true, template: `<h2>Modification d'un devoir</h2>` })
class EditAssignmentPage {}

@Component({ standalone: true, template: `<h2>Suppression d'un devoir</h2>` })
class DeleteAssignmentPage {}

@Component({ standalone: true, template: `<h2>Génération de données de test</h2>` })
class SeedDataPage {}

const routes: Routes = [
  { path: '', redirectTo: 'assignments', pathMatch: 'full' },
  { path: 'assignments', component: Assignments },
  { path: 'add', component: Assignments },
  { path: 'edit', component: EditAssignmentPage },
  { path: 'delete', component: DeleteAssignmentPage },
  { path: 'seed', component: SeedDataPage },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
