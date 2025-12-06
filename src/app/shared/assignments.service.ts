import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { Logging } from './logging';

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
   * Ajoute un assignment a la liste des assignments
   * @param {Assignment} assignment - L'assignment a ajouter
   * @returns Observable<string> - Un Observable qui contient le message de confirmation de l'ajout de l'assignment
   */
  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);

    this.loggingService.log(assignment.nom, "ajouté");

    return of("Assignment ajouté !");
  } 

  /**
   * Met a jour un assignment dans la liste des assignments
   * @param {Assignment} assignment - L'assignment a mettre a jour
   * @returns Observable<string> - Un Observable qui contient le message de confirmation de la mise a jour de l'assignment
   */
  updateAssignment(assignment: Assignment): Observable<string> {
    const index = this.assignments.findIndex(a => a.id === assignment.id);
    if (index !== -1) {
      this.assignments[index] = assignment;
      this.loggingService.log(assignment.nom, "mis à jour");
      return of("Assignment mis à jour");
    } else {
      return of("Assignment non trouvé");
    }
  }

  /**
   * Supprime un assignment de la liste des assignments
   * @param {Assignment} assignment - L'assignment a supprimer
   * @returns Observable<string> - Un Observable qui contient le message de confirmation de la suppression de l'assignment
   */
  deleteAssignment(assignment: Assignment): Observable<string> {
    const index = this.assignments.findIndex(a => a.id === assignment.id);
    if (index !== -1) {
      this.assignments.splice(index, 1);
      this.loggingService.log(assignment.nom, "supprimé");
      return of("Assignment supprimé");
    } else {
      return of("Assignment non trouvé");
    }
  }
  
  /**
   * Constructeur de la classe AssignmentsService
   * Affiche un message pour indiquer que le service a été créé
   */
  constructor(private loggingService: Logging) {
    
  } 
    
}
