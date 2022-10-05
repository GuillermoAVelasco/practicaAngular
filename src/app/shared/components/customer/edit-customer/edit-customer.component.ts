import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Customer } from 'src/app/core/class/customer';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'pr-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  public formECustomer: FormGroup;
  mjeError=false;
  mje="";
  visible=false;

  constructor(private formBuilder:FormBuilder, private router:Router, private customerService:CustomerService,private activatedRoute: ActivatedRoute){
    let dni=0;

    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      dni = parseInt(parametros.get("dni")!);      
    });
    let customer:Customer;
    customer= this.customerService.getCustomer(dni);
    customer= this.customerService.getCustomer(dni);
    this.formECustomer = this.formBuilder.group({
      nombre: [customer.nombre, [Validators.required, Validators.minLength(4),Validators.maxLength(25)]],
      apellido: [customer.apellido, [Validators.required, Validators.minLength(4),Validators.maxLength(25)]],     
      email: [customer.email, [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      direccion: [customer.direccion, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],  
      dni: [customer.dni, [Validators.required,Validators.minLength(7)]],
      fechaNac: [customer.fechaNac, [Validators.required]],
      telefono: [customer.telefono, [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],      
    });   
    
  }

  ngOnInit(): void {
  }

  customerEdit(){
    let customer= new Customer();
    customer.nombre = this.formECustomer.get('nombre')?.value;
    customer.apellido = this.formECustomer.get('apellido')?.value;
    customer.email = this.formECustomer.get('email')?.value;
    customer.direccion = this.formECustomer.get('direccion')?.value;
    customer.dni = this.formECustomer.get('dni')?.value;
    customer.fechaNac = this.formECustomer.get('fechaNac')?.value;
    customer.telefono = this.formECustomer.get('telefono')?.value;
    
    let customers=this.customerService.getListCustomer();
    let index= this.customerService.findCustomer(customer.dni);
    customers[index]=customer;
    localStorage.setItem('Customers', JSON.stringify(customers));
    
    this.router.navigate(['/list']);

  }

  get Nombre() {
    return this.formECustomer.get('nombre');
  }
  
  get Apellido() {
    return this.formECustomer.get('apellido');
  }
  
  get Email() {
    return this.formECustomer.get('email');
  }

  get Dni() {
    return this.formECustomer.get('dni');
  }

  get Direccion() {
    return this.formECustomer.get('direccion');
  }

  get FechaNac() {
    return this.formECustomer.get('fechaNac');
  }

  get Telefono() {
    return this.formECustomer.get('telefono');
  }

  valida(formu:FormGroup){
    return this.Nombre?.invalid || this.Apellido?.invalid || this.Email?.invalid || this.Dni?.invalid ||
           this.Direccion?.invalid || this.FechaNac?.invalid || this.Telefono?.invalid;
   }


}
