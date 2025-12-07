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
   * Vérifie si l'utilisateur est connecté et si il est un admin
   * @param {ActivatedRouteSnapshot} route - La route actuelle
   * @param {RouterStateSnapshot} state - L'etat de la route
   * @returns true si l'utilisateur est connecté et si il est un admin, false sinon
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    }

    if (!this.authService.isAdmin()) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
