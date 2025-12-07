import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  /**
   * Constructeur de la classe AuthGuard
   * @param {AuthService} authService - Le service AuthService
   * @param {Router} router - Le router
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  
  /**
   * Méthode qui permet de vérifier si l'utilisateur a le droit d'accès à la route demandée.
   * Elle renvoie true si l'utilisateur a le droit d'accès, false sinon.
   * Si l'accès est refusé, elle log un message d'erreur et redirige l'utilisateur vers /home.
   * @param route - Un snapshot de la route actuelle.
   * @param state - Un snapshot de l'état de la route.
   * @returns Un boolean qui indique si l'utilisateur a le droit d'accès.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAdmin()) {
      return true;
    }

    console.log('AuthGuard: accès refusé, redirection vers /home');
    this.router.navigate(['/home']);
    return false;
  }
}
