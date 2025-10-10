import { I } from '@angular/cdk/keycodes';
import { Component, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-assignment-detail',
  imports: [DatePipe],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css'
})
export class AssignmentDetail {
  @Input() assignmentTransmis?: Assignment;

  onAssignmentRendu() {
    if(!this.assignmentTransmis) return;
    this.assignmentTransmis!.rendu = true;
  }

}
