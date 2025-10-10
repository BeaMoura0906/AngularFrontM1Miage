import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './add-assignment.html',
  styleUrl: './add-assignment.css'
})

export class AddAssignment {
  ajoutActive = false;
  ngOnInit(): void {
    setTimeout(() => this.ajoutActive = true, 2000);
  }

  nomDevoir = '';
  dateDeRendu!: Date;

  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  // Temporaire
  private generateId(): number {
    return Math.floor(Math.random() * 10000);
  }

  onSubmit() {
    if( !this.nomDevoir || !this.dateDeRendu) return;

    const id = this.generateId();

    const nouvelAssignment = new Assignment(
      id,
      this.nomDevoir,
      this.dateDeRendu,
      false
    );

    this.nouvelAssignment.emit(nouvelAssignment);
    
    this.nomDevoir = '';
    this.dateDeRendu = new Date();
  }
}
