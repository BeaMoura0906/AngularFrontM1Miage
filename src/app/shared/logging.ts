import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logging {
  
  constructor() { }

  log(nomAssignment: string, action: string) {
    console.log(`Assignment "${nomAssignment}" ${action}`);
  }
}
