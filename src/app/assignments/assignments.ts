import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-assignments',
  imports: [DatePipe, MatDividerModule],
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

}
