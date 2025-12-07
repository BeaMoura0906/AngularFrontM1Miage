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
import { AssignmentDetail } from "./assignment-detail/assignment-detail";
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
    AssignmentDetail, 
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

  /**
   * Constructeur de la classe Assignments
   * @param {AssignmentsService} assignmentService - Le service AssignmentsService
   */
  constructor (private assignmentService:AssignmentsService) {}

/**
 * Initialise la liste des assignments en récupérant la liste des assignments du service AssignmentsService
 */
  ngOnInit(): void {
    this.assignmentService.getAssignments()
      .subscribe((assignments) => {
        this.assignments = assignments;
      });
  }
  
  assignmentSelectionne?:Assignment;

  /**
   * Sélectionne un assignment pour afficher ses détails
   * @param {Assignment} assignment - L'assignment à sélectionner
   */
  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }


  /**
   * Supprime l'assignment selectionné de la liste des assignments
   * @param {Assignment} a - L'assignment a supprimer
   */
  onDelete(a: Assignment) {
    this.assignmentService.deleteAssignment(a)
      .subscribe((message) => {
        console.log(message);
        this.assignmentSelectionne = undefined;
      });
  }

}
