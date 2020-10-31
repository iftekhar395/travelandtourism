import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { ToastrService } from 'ngx-toastr';
import { Payment } from '../payment';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  constructor(public paymentService: PaymentService,
    private toastr: ToastrService) { }

    showToastr(){
      this.toastr.success('Data Submitted Successfully...', 'Dhrubo Travel Agency', {
          timeOut: 1000,
          progressBar: true,
          progressAnimation: 'increasing'
      });
    }
    showToastr1(){
      this.toastr.success('Data Updated Successfully...', 'Dhrubo Travel Agency', {
          timeOut: 1000,
          progressBar: true,
          progressAnimation: 'increasing'
      });
    }

  ngOnInit() {
  }

  updatePayment(payment: Payment){
  this.paymentService.updatePayment(payment).subscribe();
  this.showToastr1();
    this.clear();
  }

  createPayment(payment: Payment){
    this.paymentService.createPayment(payment).subscribe();
    this.ngOnInit();
    this.showToastr();
    this.clear();
  }

  clear(){
    this.paymentService.payment = {
      payid: null,
      custid: null,
      bookingid: null,
      paydate: new Date(),
      amount: null,
      paytype: '',
      status: ''
    };
  }

}
