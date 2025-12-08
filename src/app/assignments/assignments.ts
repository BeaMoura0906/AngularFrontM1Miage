import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { Rendu } from '../shared/rendu';
import { NonRendu } from '../shared/non-rendu';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatList, MatListSubheaderCssMatStyler, MatListItem  } from "@angular/material/list";
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [
    DatePipe, 
    MatDividerModule, 
    Rendu, 
    NonRendu, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatList, 
    MatListSubheaderCssMatStyler, 
    MatListItem,
    RouterLink
  ],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})

export class Assignments implements OnInit {
  assignments: Assignment[] = [];

  page = 1;
  limit = 10;
  totalDocs = 0;
  totalPages = 0;

  /**
   * Constructeur de la classe Assignments
   * @param {AssignmentsService} assignmentService - Le service AssignmentsService
   */
  constructor (private assignmentService:AssignmentsService) {}

  /**
   * Initialise la liste des assignments en récupérant la liste des assignments à l'aide de loadAssignments()
   * @returns void
   */
  ngOnInit(): void {
    this.loadAssignments();
  }

  /**
   * Recharge la liste des assignments en appelant le service AssignmentsService, et met a jour les variables de pagination.
   * @returns void
   */
  loadAssignments(): void {
    this.assignmentService.getAssignments(this.page, this.limit)
      .subscribe({
        next: (data) => {
          this.assignments = data.docs;
          this.totalDocs = data.totalDocs;
          this.totalPages = data.totalPages;
          this.page = data.page;
        },
        error: (err) => {
          console.error('Erreur chargement assignments :', err);
        }
      });
  }
  
  
  /**
   * Peuple la base de données en appelant le service AssignmentsService
   * Affiche un message de confirmation de la peuplée de la base de données
   * Recharge la liste des assignments en appelant la méthode loadAssignments()
   * @returns void
   */
  peuplerBD() {
    this.assignmentService.peuplerBDAvecForkJoin().subscribe(() => {
      console.log('Base peuplée !');
      this.page = 1;
      this.loadAssignments();
    });
  }

  
  /**
   * Passer a la page suivante si elle existe
   */
  pageSuivante(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadAssignments();
    }
  }

  /**
   * Passer a la page precedente si elle existe
   */
  pagePrecedente(): void {
    if (this.page > 1) {
      this.page--;
      this.loadAssignments();
    }
  }

  /**
   * Passer a la premiere page
   */
  premierePage(): void {
    if (this.page !== 1) {
      this.page = 1;
      this.loadAssignments();
    }
  }

  /**
   * Passer a la derniere page
   */
  dernierePage(): void {
    if (this.page !== this.totalPages) {
      this.page = this.totalPages;
      this.loadAssignments();
    }
  }
}
