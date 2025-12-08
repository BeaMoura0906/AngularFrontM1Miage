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

  /**
   * Constructeur de la classe Assignments
   * @param {AssignmentsService} assignmentService - Le service AssignmentsService
   */
  constructor (private assignmentService:AssignmentsService) {}

  /**
   * Initialise la liste des assignments en récupérant la liste des assignments du service AssignmentsService
   */
  ngOnInit(): void {
    this.loadAssignments();
  }

  loadAssignments(): void {
    this.assignmentService.getAssignments()
      .subscribe((assignments) => {
        this.assignments = assignments;
      });
  }
  peuplerBD() {
    this.assignmentService.peuplerBDAvecForkJoin().subscribe(() => {
      console.log('Base peuplée !');
      this.loadAssignments();
    });
  }

}
