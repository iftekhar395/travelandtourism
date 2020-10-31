import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  allPayment: Payment[];

  constructor(private paymentService : PaymentService) { }

  ngOnInit() {
    this.getAllPayment();
    this.paymentService.refreshNeeded$.subscribe(() => {
      this.getAllPayment();
    });
    this.getAllPayment();
  }

  getAllPayment() {
    this.paymentService.getAllPayment().subscribe((data: Payment[]) => {
      this.allPayment = data;
    });
  }

  deletePayment(payid: number) {
    this.paymentService.deletePayment(payid).subscribe((data: Payment) => {
      this.getAllPayment();
      alert("Do you want to delete...???");
    });
  }

  editPayment(payment: Payment) {
    this.paymentService.payment = Object.assign({}, payment);
    
  }
}
