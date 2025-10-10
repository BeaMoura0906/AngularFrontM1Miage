import { Component, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-assignment-detail',
  imports: [DatePipe, MatCardModule, MatButtonModule, MatCheckboxModule],
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
