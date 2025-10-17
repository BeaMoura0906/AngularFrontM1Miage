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

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [DatePipe, MatDividerModule, Rendu, NonRendu, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, AssignmentDetail, MatList, MatListSubheaderCssMatStyler, MatListItem, AddAssignment],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})

export class Assignments implements OnInit {
  formVisible = false;
  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  ngOnInit(): void {
    if(this.assignments.length > 0) {
      this.assignmentSelectionne = this.assignments[0];
    }
  }

  assignments: Assignment[] = [];

  onNouvelAssignment(assignment: Assignment) {
    this.assignments.push(assignment);
    this.formVisible = false;
    if (!this.assignmentSelectionne && this.assignments.length > 0) {
      this.assignmentSelectionne = this.assignments[0];
    }
  }

  
  assignmentSelectionne?:Assignment;

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onDelete(a: Assignment) {
    this.assignments = this.assignments.filter(x => x.id !== a.id);
    this.assignmentSelectionne = undefined;
  }

}
