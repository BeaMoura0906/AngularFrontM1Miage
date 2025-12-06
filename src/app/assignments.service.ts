import { Injectable } from '@angular/core';
import { Assignment } from './assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * @class AssignmentsService 
 * Service pour la gestion des assignments
 */
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

  /**
   * Renvoie un Observable qui contient la liste des assignments
   * @returns Observable<Assignment[]>
   */
  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  /**
   * Constructeur de la classe AssignmentsService
   * Affiche un message pour indiquer que le service a été créé
   */
  constructor() { 
    console.log("AssignmentsService créé !");
  }
}
