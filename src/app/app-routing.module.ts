import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomerComponent } from './shared/components/customer/list-customer/list-customer.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'list',component:ListCustomerComponent},
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  /*
  {path:'**', component:ListCustomerComponent}, //404
  {path:'', redirectTo: '', pathMatch: 'full'}, //x defecto*  
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
