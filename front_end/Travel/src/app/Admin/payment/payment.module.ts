import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaymentService } from './payment.service';



@NgModule({
  declarations: [PaymentFormComponent, PaymentListComponent],
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [PaymentService],
  exports: [PaymentListComponent, PaymentFormComponent]
})
export class PaymentModule { }
