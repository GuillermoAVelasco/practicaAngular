import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Practica Final Angular';
  valida=false;

  constructor(private autService:AuthService,private router:Router){
  
  }

  ngOnInit(): void {
    this.valida= this.autService.estaAutenticado();
    if(this.valida) this.router.navigate(['/list']);      
    else this.router.navigate(['/', 'login']);
  }
}
