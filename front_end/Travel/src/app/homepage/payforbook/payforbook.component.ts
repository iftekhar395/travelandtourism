import { Component, OnInit } from '@angular/core';
import { Bookhotel } from '../booknow/bookhotel';
import { Payment } from 'src/app/Admin/payment/payment';
import { BooknowService } from '../booknow/booknow.service';
import { PaymentService } from 'src/app/Admin/payment/payment.service';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { Bookhotl } from '../booknow/bookhotl';

@Component({
  selector: 'app-payforbook',
  templateUrl: './payforbook.component.html',
  styleUrls: ['./payforbook.component.css']
})
export class PayforbookComponent implements OnInit {

  bookingid: number = null;
  cardNumber: string = '';
  constructor(
    public cservice: CustomerService,
    public service: BooknowService,
    public paymentService: PaymentService,
    private toastr: ToastrService) { }

  ngOnInit() {
    // this.getCustomerById()
  }

  
  // bookh: Bookhotel;
  getCustomerById(custid: number) {
      this.service.getIndividualBookingById(custid).subscribe((data: Bookhotl) => {
        this.service.bookh = data;
      });
    }

    
  createPayment(payment: Payment){
    this.paymentService.payment.amount = this.service.bookh.subtotal;
    this.paymentService.createPayment(payment).subscribe();
    this.updatePayment();
    this.ngOnInit();
    this.showToastr();
    // this.clear();
  }

  
  updatePayment(){
    this.service.bohotel.bookingid = this.bookingid;
    this.service.updatePayment(this.service.bohotel).subscribe();
  }
  
  showToastr(){
    this.toastr.success('Payment Successfull...', 'Dhrubo Travel Agency', {
        timeOut: 1000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }

  
  clear(){
    this.paymentService.payment = {
      payid: null,
      custid: this.cservice.userRole1[0][1].custid,
      bookingid: null,
      paydate: new Date(),
      amount: null,
      paytype: '',
      status: 'Paid'
    };
    this.cardNumber = '';
    this.service.bookh.subtotal = null
  }
}

