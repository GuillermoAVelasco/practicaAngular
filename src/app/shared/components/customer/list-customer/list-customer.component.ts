import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/core/class/customer';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'pr-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
    
  list:Customer[]=[];  
  valida=false;

  constructor(private listCustomer:CustomerService,private auth:AuthService,private router:Router) {  }


  ngOnInit(): void {
    this.valida=this.auth.estaAutenticado();
    this.list=this.listCustomer.getListCustomer();
    history.go(1);
    
  }

  delete(e:any){
    let index=this.list.findIndex(x=> x.apellido==e.apellido && x.nombre==e.nombre && x.email==e.email);
    this.list.splice(index,1);
    localStorage.setItem('Customers', JSON.stringify(this.list));
  }

  cerrarSesion(){
    this.auth.destroySession();
    this.router.navigate(['login']);
  }

}
