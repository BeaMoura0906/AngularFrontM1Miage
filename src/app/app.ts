import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
    MatListModule, 
    MatSlideToggleModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('assignment-app');

  /**
   * Constructor 
   * @param authService 
   */
  constructor(private authService: AuthService) {}

  /**
   * Toggles the admin mode.
   * If the user is logged in, it logs the user out.
   * If the user is not logged in, it logs the user in.
   */
  onToggleAdmin() {
    if (this.authService.loggedIn) {
      this.authService.logOut();
    } else {
      this.authService.logIn();
    }
  }

  /**
   * Returns true if the user is logged in, false otherwise.
   */
  isLoggedIn() {
    return this.authService.isAdmin();
  }
}
