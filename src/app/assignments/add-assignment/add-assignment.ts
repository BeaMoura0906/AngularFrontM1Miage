import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Router } from '@angular/router';

import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';

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
  nomDevoir = '';
  dateDeRendu!: Date;

  /**
   * Constructeur de la classe AddAssignment
   * @param {AssignmentsService} assignmentsService - Le service AssignmentsService
   * @param {Router} router - Le router
   */
  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router
  ) {}

  /**
   * Initialise l'état de l'ajout
   * L'ajout est vrai après 2 secondes pour permet l'animation de l'ajout
   */
  ngOnInit(): void {
    setTimeout(() => this.ajoutActive = true, 2000);
  }

  /**
   * Génère un identifiant unique pour un assignment.
   * L'identifiant est un nombre aléatoire entre 0 et 9999.
   * @returns Un nombre unique pour un assignment.
   */
  private generateId(): number {
    return Math.floor(Math.random() * 10000);
  }

  /**
   * Ajoute un assignment à la liste des assignments
   * Si le formulaire est valide, crée un nouvel assignment et l'ajoute au service AssignmentsService
   * Affiche un message de confirmation de l'ajout de l'assignment
   * Retourne à la liste des assignments
   */
  onSubmit() {
    if (!this.nomDevoir || !this.dateDeRendu) return;

    const id = this.generateId();

    const nouvelAssignment = new Assignment(
      id,
      this.nomDevoir,
      this.dateDeRendu,
      false
    );

    // Ajout de l'assignment au service
    this.assignmentsService.addAssignment(nouvelAssignment)
      .subscribe((message) => {
        console.log(message);
        this.router.navigate(['/home']);
      });

    this.nomDevoir = '';
    this.dateDeRendu = new Date();
  }
}
