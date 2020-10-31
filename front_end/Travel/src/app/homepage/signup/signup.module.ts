import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerService } from 'src/app/Admin/customer/customer.service';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,FormsModule, HttpClientModule
  ],
  providers: [CustomerService],
  exports: [SignupComponent]
})
export class SignupModule { }
