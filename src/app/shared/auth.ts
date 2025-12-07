import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  
  /**
   * Sets the loggedIn flag to true and logs a message to the console.
   * This simulates a user logging in.
   */
  logIn() {
    this.loggedIn = true;
    console.log('AuthService: logIn, loggedIn =', this.loggedIn);
  }

  /**
   * Sets the loggedIn flag to false and logs a message to the console.
   * This simulates a user logging out.
   */
  logOut() {
    this.loggedIn = false;
    console.log('AuthService: logOut, loggedIn =', this.loggedIn);
  }

  /**
   * Returns true if the user is logged in, false otherwise.
   */
  isAdmin(): boolean {
    return this.loggedIn;
  }
}
