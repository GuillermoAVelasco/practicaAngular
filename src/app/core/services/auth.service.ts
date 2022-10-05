
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.estaAutenticado();
  }

  estaAutenticado(): boolean {
    try {
      JSON.parse(localStorage.getItem('currentUser') as string).email;  
      return true;
            
    } catch (error) {
      console.log('No has iniciado sesión...', error);      
      return false;
    }
  }
  
  destroySession(){
    localStorage.removeItem('currentUser');
  }

}
