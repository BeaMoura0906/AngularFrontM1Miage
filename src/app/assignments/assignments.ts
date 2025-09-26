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
@Component({
  selector: 'app-assignments',
  imports: [DatePipe, MatDividerModule, Rendu, NonRendu, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule],
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

  assignments: { nom: string; dateDeRendu: Date; rendu: boolean }[] = [];

  onSubmit() {
    if( !this.nomDevoir || !this.dateDeRendu) return;

    this.assignments.push({
      nom: this.nomDevoir,
      dateDeRendu: this.dateDeRendu,
      rendu: false
    });

    this.nomDevoir = '';
    this.dateDeRendu = new Date();
  }

}
