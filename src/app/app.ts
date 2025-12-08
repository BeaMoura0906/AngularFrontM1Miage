import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AuthService } from './shared/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('assignment-app');

  /**
   * Constructeur de la classe App
   * @param {AssignmentsService} assignmentsService - Le service AssignmentsService
   * @param {AuthService} authService - Le service AuthService
   * @param {Router} router - Le routeur
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  
  /**
   * Vérifie si l'utilisateur est connecté avec authService
   * @returns true si l'utilisateur est connecté, false sinon
   */
  isLogged() {
    return this.authService.isLogged();
  }

  /**
   * Vérifie si l'utilisateur est un admin avec authService
   * @returns true si l'utilisateur est un admin, false sinon
   */
  isAdmin() {
    return this.authService.isAdmin();
  }

  /**
   * Deconnecte l'utilisateur actuel avec authService
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
