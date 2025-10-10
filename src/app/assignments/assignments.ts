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

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [DatePipe, MatDividerModule, Rendu, NonRendu, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, AssignmentDetail, MatList, MatListSubheaderCssMatStyler, MatListItem],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})

export class Assignments implements OnInit {
  ajoutActive = false;
  ngOnInit(): void {
    setTimeout(() => this.ajoutActive = true, 2000);
  }

  titre = 'Mon application sur les Assignments !';

  nomDevoir = '';
  dateDeRendu!: Date;

  assignments: Assignment[] = [];

  // Temporaire
  private generateId(): number {
    return (this.assignments.length
      ? Math.max(...this.assignments.map(a => (a as any).id ?? 0))
      : 0) + 1;
  }

  onSubmit() {
    if( !this.nomDevoir || !this.dateDeRendu) return;

    const id = this.generateId();

    const newAssignment: Assignment ={
      id,
      nom: this.nomDevoir,
      dateDeRendu: this.dateDeRendu,
      rendu: false
    };
    
    this.assignments.push(newAssignment);

    this.nomDevoir = '';
    this.dateDeRendu = new Date();
  }
  
  assignmentSelectionne!:Assignment;

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }
}
