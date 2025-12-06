import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AssignmentsService } from '../../shared/assignments.service';  

@Component({
  selector: 'app-assignment-detail',
  imports: [DatePipe, MatCardModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css'
})

export class AssignmentDetail {
  @Input() assignmentTransmis?: Assignment;

  @Output() deleteAssignment = new EventEmitter<Assignment>();

  /**
   * Met a jour l'assignment en cours pour le marquer comme rendu
   */
  onAssignmentRendu() {
    if(!this.assignmentTransmis) return;
    this.assignmentTransmis.rendu = true;

    this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => console.log(message));
  }

  /**
   * Supprime l'assignment actuellement selectionné de la liste des assignments
   * @returns void
   */
  onDeleteClick() {
    if(!this.assignmentTransmis) return;
    this.deleteAssignment.emit(this.assignmentTransmis);
  }

  /**
   * Constructeur de la classe AssignmentDetail
   * @param {AssignmentsService} assignmentsService - Le service AssignmentsService
   */
  constructor(private assignmentsService: AssignmentsService) {}

}
