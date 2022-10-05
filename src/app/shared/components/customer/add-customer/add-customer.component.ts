import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/core/class/customer';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'pr-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  public formCustomer: FormGroup;
  mjeError=false;
  mje="";

  constructor(private formBuilder:FormBuilder, private router:Router, private customerService:CustomerService){
    
    this.formCustomer = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(25)]],
      apellido: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(25)]],     
      email: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      direccion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],  
      dni: ['', [Validators.required,Validators.minLength(7)]],
      fechaNac: ['', [Validators.required]],
      telefono: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],      
    });
    
  }

  ngOnInit(): void {
  }

  customerAdd(){
    let customer= new Customer();
    customer.nombre = this.formCustomer.get('nombre')?.value;
    customer.apellido = this.formCustomer.get('apellido')?.value;
    customer.email = this.formCustomer.get('email')?.value;
    customer.direccion = this.formCustomer.get('direccion')?.value;
    customer.dni = this.formCustomer.get('dni')?.value;
    customer.fechaNac = this.formCustomer.get('fechaNac')?.value;
    customer.telefono = this.formCustomer.get('telefono')?.value;
    
    if(customer.dni<10000) {this.displayError("El Dni debe ser un numero mayor a cero"); return}
    if(Number(customer.telefono)<1000000000) {this.displayError("El Telefono debe ser un numero correcto"); return}
    
    let customers=this.customerService.getListCustomer();
    customers.push(customer);
    localStorage.setItem('Customers', JSON.stringify(customers));
    
    this.router.navigate(['list']);

  }

  displayError(m:string):void{
    this.mjeError=true;
    this.mje=m;
    setTimeout(()=>{
      this.mjeError = false;
    },5000);  
  }

  get Nombre() {
    return this.formCustomer.get('nombre');
  }
  
  get Apellido() {
    return this.formCustomer.get('apellido');
  }
  
  get Email() {
    return this.formCustomer.get('email');
  }

  get Dni() {
    return this.formCustomer.get('dni');
  }

  get Direccion() {
    return this.formCustomer.get('direccion');
  }

  get FechaNac() {
    return this.formCustomer.get('fechaNac');
  }

  get Telefono() {
    return this.formCustomer.get('telefono');
  }

  valida(formu:FormGroup){
    return this.Nombre?.invalid || this.Apellido?.invalid || this.Email?.invalid || this.Dni?.invalid ||
           this.Direccion?.invalid || this.FechaNac?.invalid || this.Telefono?.invalid;
   }

}
