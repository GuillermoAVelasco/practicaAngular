import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AuthService } from 'src/app/core/services/auth.service';
const routes: Routes = [
  {path:'add', component: AddCustomerComponent,canActivate:[AuthService] },
  { path: "edit/:dni", component: EditCustomerComponent,canActivate:[AuthService]   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
