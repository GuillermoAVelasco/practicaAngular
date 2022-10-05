import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerModule } from './components/customer/customer.module';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';

const COMPONENTS=[    
  HeaderComponent,
  FooterComponent,
  LoginComponent,
  ListCustomerComponent
];

const MODULES=[
  CustomerModule,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    CustomPipePipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    ...MODULES
  ],
  exports:[
    ...COMPONENTS,
    ...MODULES
  ]
})

export class SharedModule { }
