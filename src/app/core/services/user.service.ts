import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  usuarios:User[]=[new User('xxx@gmail.com','1234567')];
  constructor() { 

  }

  login(user:User): Observable<any>{
    let listado:User[]=this.getUsers();
    let usuario=listado.filter(x=> x.email==user.email && x.password==user.password);
    return of(usuario);
  }

  getUsers():User[]{
    return this.usuarios;
  }  
}
