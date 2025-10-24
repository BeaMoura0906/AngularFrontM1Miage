import { Injectable } from '@angular/core';
import { Assignment } from './assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  
  assignments: Assignment[] = [
    { 
      id: 1,
      nom: "TP Angular", 
      dateDeRendu: new Date("2025-12-07"),
      rendu: false
    }, 
    { 
      id: 2,
      nom: "Projet Java",
      dateDeRendu: new Date("2025-11-15"),
      rendu: true
    },
    { 
      id: 3,
      nom: "Examen HTML",
      dateDeRendu: new Date("2025-11-20"),
      rendu: false
    }
  ];

  getAssignments(): Assignment[] {
    return this.assignments;
  }

  constructor() { 
    console.log("AssignmentsService créé !");
  }
}
