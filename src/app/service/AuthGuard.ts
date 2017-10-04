import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {

      if (localStorage.getItem('userDetails')!='' && localStorage.getItem('userDetails')) {
            return true;
      }

      this.router.navigate(['/']);
      return false;
    }
}
