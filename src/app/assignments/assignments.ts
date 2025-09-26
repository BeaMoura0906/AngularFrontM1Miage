import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { Rendu } from '../shared/rendu';
import { NonRendu } from '../shared/non-rendu';
@Component({
  selector: 'app-assignments',
  imports: [DatePipe, MatDividerModule, Rendu, NonRendu],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})
export class Assignments {
  titre = 'Mon application sur les Assignments !';

  assignments = [
    { 
      nom: 'Angular Project', 
      dateDeRendu: '2025-12-31',
      rendu: false  
    } , 
    { 
      nom: 'TypeScript Basics', 
      dateDeRendu: '2025-11-15',
      rendu: true  
    } 
  ];

  getBackgroundColor(assignment: any) {
    return assignment.rendu ? 'lightgreen' : 'lightcoral';
  }

}
