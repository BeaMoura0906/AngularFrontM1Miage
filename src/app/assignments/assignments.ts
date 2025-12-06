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
import { AddAssignment } from "./add-assignment/add-assignment";
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [DatePipe, MatDividerModule, Rendu, NonRendu, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, AssignmentDetail, MatList, MatListSubheaderCssMatStyler, MatListItem, AddAssignment],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})

export class Assignments implements OnInit {
  formVisible = false;
  assignments: Assignment[] = [];

  /**
   * Constructeur de la classe Assignments
   * @param {AssignmentsService} assignmentService - Le service AssignmentsService
   */
  constructor (private assignmentService:AssignmentsService) {}

/**
 * Affiche le formulaire d'ajout d'un assignment
 */
  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }


/**
 * Initialise la liste des assignments en récupérant la liste des assignments du service AssignmentsService
 */
  ngOnInit(): void {
    this.assignmentService.getAssignments()
      .subscribe((assignments) => {
        this.assignments = assignments;
      });
  }

  /**
   * Ajoute un assignment à la liste des assignments
   * @param {Assignment} assignment - L'assignment à ajouter
   */
  onNouvelAssignment(assignment: Assignment) {
    this.assignmentService.addAssignment(assignment)
      .subscribe((message) => {
        console.log(message);
        this.formVisible = false;
      });
      if(!this.assignmentSelectionne && this.assignments.length > 0) {
        this.assignmentSelectionne = this.assignments[0];
      }
  }

  
  assignmentSelectionne?:Assignment;

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }


  onDelete(a: Assignment) {
    this.assignmentService.deleteAssignment(a)
      .subscribe((message) => {
        console.log(message);
        this.assignmentSelectionne = undefined;
      });
  }

}
