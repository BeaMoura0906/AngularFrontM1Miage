import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../../shared/assignments.service';  

@Component({
  selector: 'app-assignment-detail',
  imports: [DatePipe, MatCardModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css'
})

export class AssignmentDetail {
  assignment?: Assignment;

  /**
   * Constructeur de la classe AssignmentDetail
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
   * Initialise la liste des assignments en récupérant l'assignment correspondant à l'ID fourni
   */
  ngOnInit(): void {
    this.getAssignment();
  }

  /**
   * Initialise la liste des assignments en récupérant l'assignment correspondant à l'ID fourni
   * @description Cette méthode récupère l'assignment correspondant à l'ID fourni en appelant le service AssignmentsService
   * @returns void
   */
  getAssignment() {
    const id = +this.route.snapshot.params['id'];

    this.assignmentsService.getAssignment(id)
      .subscribe(a => {
        this.assignment = a;
      });
  }

  
  /**
   * Met a jour le statut de l'assignment en rendu
   * @description Cette méthode met a jour le statut de l'assignment en rendu et appelle le service AssignmentsService pour mettre a jour l'assignment.
   * @returns void
   */
  onAssignmentRendu() {
    if (!this.assignment) return;

    this.assignment.rendu = true;

    this.assignmentsService.updateAssignment(this.assignment)
      .subscribe((message) => {
        console.log(message);
        this.router.navigate(['/home']);
      });
  }

  
  /**
   * Supprime l'assignment de la liste des assignments
   * @description Cette méthode supprime l'assignment correspondant à l'ID fourni en appelant le service AssignmentsService
   * @returns void
   */
  onDeleteClick() {
    if (!this.assignment) return;

    this.assignmentsService.deleteAssignment(this.assignment)
      .subscribe((message) => {
        console.log(message);
        this.router.navigate(['/home']);
      });
  }

  /**
   * Ouvre l'éditeur de l'assignment
   * @description Cette méthode ouvre l'éditeur de l'assignment correspondant à l'ID fourni en appelant le service AssignmentsService
   * @returns void
   */
  onEditClick() {
    if (!this.assignment) return;

    this.router.navigate(
      ['/assignment', this.assignment.id, 'edit'], 
      {
        queryParams: { nom: this.assignment.nom },
        fragment: 'edition'
      }
    );
  }
}
