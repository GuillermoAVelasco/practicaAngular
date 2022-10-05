import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { CustomerService } from 'src/app/core/services/customer.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UserService } from 'src/app/core/services/user.service';

import { CustomerRoutingModule } from './customer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const COMPONENTS=[
  /*ListCustomerComponent,*/
  AddCustomerComponent,
  EditCustomerComponent
]

const SERVICES=[
  CustomerService,
  UserService
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    ...SERVICES
  ]
})
export class CustomerModule { }
