import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  login = '';
  password = '';
  loginFailed = false;

  private returnUrl = '/home';

  /**
   * Constructeur de la classe Login
   * @param authService - Le service AuthService
   * @param router - Le routeur
   * @param route - Le routeur actif
   * Si le guard a mis un returnUrl dans les queryParams, stocke ce returnUrl dans la propriété returnUrl sinon utilise '/home' par défaut.
   */
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  
  /**
   * Essaye une tentative de connexion
   * Si le login et le mot de passe sont corrects, redirige vers la page d'accueil
   * Sinon, affiche un message d'erreur
   */
  onSubmit() {
    this.loginFailed = false;
    const ok = this.authService.login(this.login, this.password);

    if (ok) {
      this.router.navigate([this.returnUrl]);
    } else {
      this.loginFailed = true;
    }
  }
}
