import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { Customer } from '../class/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = [];

  constructor() {
    console.log('constructor customer');
    let obtenidos = JSON.parse(localStorage.getItem('Customers') as string);

    if (obtenidos == null)
      localStorage.setItem('Customers', JSON.stringify(this.customers));

    this.customers=this.getListCustomer();
  }

  getListCustomer(): Customer[] {
      this.customers = JSON.parse(localStorage.getItem('Customers') as string);
      return this.customers;
  }

  findCustomer(dni:number):number{
    //this.customers = JSON.parse(localStorage.getItem('Customers') as string);      
    return this.customers.findIndex(x=> x.dni==dni);
  }

  getCustomer(dni:number){
    let index=this.findCustomer(dni);
    return this.customers[index];
  }

}
