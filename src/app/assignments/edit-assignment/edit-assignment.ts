import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-edit-assignment',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './edit-assignment.html',
  styleUrl: './edit-assignment.css'
})

export class EditAssignment implements OnInit {
  assignment?: Assignment;

  nomDevoir = '';
  dateDeRendu!: Date;

  
  /**
   * Constructeur de la classe EditAssignment
   * @param {AssignmentsService} assignmentsService - Le service AssignmentsService
   * @param {ActivatedRoute} route - Le routeur actif
   * @param {Router} router - Le routeur
   */
  constructor(
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  
  /**
   * Initialise la liste des assignments en récupérant l'assignment correspondant à l'ID fourni.
   * Affiche les paramètres de la route et le fragment.
   * Abonne un listener aux paramètres de la route et au fragment.
   */
  ngOnInit(): void {
    this.getAssignment();

    console.log("QueryParams:", this.route.snapshot.queryParams);
    console.log("Fragment:", this.route.snapshot.fragment);

    this.route.queryParams.subscribe(params => {
      console.log("Query params (observable):", params);
    });

    this.route.fragment.subscribe(f => {
      console.log("Fragment (observable):", f);
    });
  }

  
  /**
   * Met a jour le statut de l'assignment en rendu
   * @description Cette méthode met a jour le statut de l'assignment en rendu et appelle le service AssignmentsService pour mettre a jour l'assignment.
   * @returns void
   */
  getAssignment() {
    const id = +this.route.snapshot.params['id'];

    this.assignmentsService.getAssignment(id)
      .subscribe(a => {
        if (!a) return;
        this.assignment = a;

        // pré-remplir le formulaire
        this.nomDevoir = a.nom;
        this.dateDeRendu = a.dateDeRendu;
      });
  }

  
  /**
   * Met a jour le statut de l'assignment en rendu
   * @description Cette.visitMethod met a jour le statut de l'assignment en rendu et appelle le service AssignmentsService pour mettre a jour l'assignment.
   * @returns void
   */
  onSubmit() {
    if (!this.assignment) return;
    if (!this.nomDevoir || !this.dateDeRendu) return;

    this.assignment.nom = this.nomDevoir;
    this.assignment.dateDeRendu = this.dateDeRendu;

    this.assignmentsService.updateAssignment(this.assignment)
      .subscribe(message => {
        console.log(message);
        this.router.navigate(['/home']);
      });
  }
}
