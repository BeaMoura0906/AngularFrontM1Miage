import { Injectable } from '@angular/core';

export type UserRole = 'user' | 'admin';

interface User {
  login: string;
  password: string;
  role: UserRole;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // PROVISOIRE : data en dur
  private users: User[] = [
    { login: 'admin', password: 'admin', role: 'admin' },
    { login: 'user',  password: 'user',  role: 'user'  }
  ];

  private currentUser: User | null = null;

  /**
   * Tente de se connecter
   * @returns true si ok, false sinon
   */
  login(login: string, password: string): boolean {
    const found = this.users.find(
      u => u.login === login && u.password === password
    );

    if (found) {
      this.currentUser = found;
      console.log('Connecté en tant que', found.login, 'role', found.role);
      return true;
    }

    this.currentUser = null;
    return false;
  }

  /**
   * Déconnecte l'utilisateur actuel
   */
  logout(): void {
    console.log('Déconnexion');
    this.currentUser = null;
  }

  /**
   * Vérifie si l'utilisateur est connecté
   * @returns true si l'utilisateur est connecté, false sinon
   */
  isLogged(): boolean {
    return this.currentUser !== null;
  }

  /**
   * Vérifie si l'utilisateur est un admin
   * @returns true si l'utilisateur est un admin, false sinon
   */
  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  /**
   * Récupère l'utilisateur actuellement connecté
   * @returns L'utilisateur actuellement connecté, ou null si aucun utilisateur connecté
   */
  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
