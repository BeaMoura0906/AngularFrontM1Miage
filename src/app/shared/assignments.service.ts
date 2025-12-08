import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { Logging } from './logging';
import { HttpClient } from '@angular/common/http';
import { mockDataAssignments } from './data';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * @class AssignmentsService 
 * Service pour la gestion des assignments
 */
export class AssignmentsService {
  
  private apiUrl = 'https://api-angular-25-26-beamoura0906.onrender.com/api/assignments';

  constructor(
    private http: HttpClient,
    private loggingService: Logging
  ) {} 

  /**
   * Renvoie un Observable qui contient la liste des assignments
   * @returns Observable<Assignment[]>
   */
  getAssignments(page: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }

  /**
   * Renvoie un Observable qui contient l'assignment correspondant a l'ID fourni
   * @param {number} id - L'ID de l'assignment a chercher
   * @returns Observable<Assignment | undefined> - Un Observable qui contient l'assignment correspondant a l'ID fourni
   */
  getAssignment(id: number): Observable<Assignment | undefined> {
    return this.http.get<Assignment | undefined>(`${this.apiUrl}/${id}`);
  }

  /**
   * Ajoute un assignment a la liste des assignments
   * @param {Assignment} assignment - L'assignment a ajouter
   * @returns Observable<string> - Un Observable qui contient le message de confirmation de l'ajout de l'assignment
   */
  addAssignment(assignment: Assignment): Observable<string> {
    return new Observable<string>(observer => {
      this.http.post<any>(this.apiUrl, assignment).subscribe({
        next: (res) => {
          this.loggingService.log(assignment.nom, 'ajouté');
          observer.next(res?.message || 'Assignment ajouté !');
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  } 

  /**
   * Met a jour un assignment dans la liste des assignments
   * @param {Assignment} assignment - L'assignment a mettre a jour
   * @returns Observable<string> - Un Observable qui contient le message de confirmation de la mise a jour de l'assignment
   */
  updateAssignment(assignment: Assignment): Observable<string> {
    return new Observable<string>(observer => {
      this.http.put<any>(this.apiUrl, assignment).subscribe({
        next: (res) => {
          this.loggingService.log(assignment.nom, 'mis à jour');
          observer.next(res?.message || 'Assignment mis à jour');
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  /**
   * Supprime un assignment de la liste des assignments
   * @param {Assignment} assignment - L'assignment a supprimer
   * @returns Observable<string> - Un Observable qui contient le message de confirmation de la suppression de l'assignment
   */
  deleteAssignment(assignment: Assignment): Observable<string> {
    return new Observable<string>(observer => {
      this.http.delete<any>(`${this.apiUrl}/${assignment._id}`).subscribe({
        next: (res) => {
          this.loggingService.log(assignment.nom, 'supprimé');
          observer.next(res?.message || 'Assignment supprimé');
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  /**
   * Peuple la base de données en appelant le service AssignmentsService
   * pour chaque assignment de la liste mockDataAssignments, crée un nouvel assignment et l'ajoute au service AssignmentsService
   * Affiche un message de confirmation de la peuplée de la base de données
   * Recharge la liste des assignments en appelant la méthode loadAssignments()
   * @returns Observable<any> - Un Observable qui contient le message de confirmation de la peuplée de la base de données
   */
  peuplerBDAvecForkJoin(): Observable<any> {
    const appels: Observable<any>[] = [];

    mockDataAssignments.forEach(a => {
      const nouvelAssignment = new Assignment();
      nouvelAssignment.id = a.id;
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
      nouvelAssignment.rendu = a.rendu;

      appels.push(this.addAssignment(nouvelAssignment));
    });

    return forkJoin(appels);
  }
  
}
