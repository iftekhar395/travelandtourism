import { Component, OnInit, Injectable } from '@angular/core';
import { BooknowService } from './booknow.service';
import { Booknow } from './booknow';
import { Hotel } from 'src/app/Admin/hotel/hotel';
import { Cart } from '../cart/cart';
import { CartLine } from '../cart/cartLine';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { Customer } from 'src/app/Admin/customer/customer';
import { Payment } from 'src/app/Admin/payment/payment'
import { PaymentService } from 'src/app/Admin/payment/payment.service';
import { ToastrService } from 'ngx-toastr';
import { Bookhotel } from './bookhotel';
import { Bookhotl } from './bookhotl';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})

export class BooknowComponent implements OnInit {
  cartl:CartLine[];
  currentDate: number = Date.now();
  bookingid: number = null;
  cardNumber: string = '';
  customer: Customer;
  constructor(
    public service: BooknowService,
    public cart: Cart,
    public cservice: CustomerService,
    public paymentService: PaymentService,
    private toastr: ToastrService) {
      console.log(this.service.allhotelbooking)
    }
    // getCustomerById(custid: number) {
    //   this.cservice.getCustomerById(custid).subscribe((data: Customer) => {
    //     this.customer = Object(data);
    //   });
    // }
  ngOnInit() {
  }


  
  // bookh: Bookhotel;
  getCustomerById(custid: number) {
      this.service.getIndividualBookingById(custid).subscribe((data: Bookhotl) => {
        this.service.bookh = data;
      });
    }
  
  updatePayment(){
    this.service.bohotel.bookingid = this.bookingid;
    // for(let i=0; i<this.service.allhotelbooking.length; i++){
    //   if(this.paymentService.payment.amount>=this.service.allhotelbooking[i][1].subtotal || this.paymentService.payment.amount != 0){
    this.service.updatePayment(this.service.bohotel).subscribe();
    // console.log(this.service.allhotelbooking[i][1].subtotal);
    // }
  }
      // console.log(this.bookingid);
      // console.log(this.service.bohotel);
  // }
  
  createBookNow(bookNow: Booknow){
    this.service.createBooking(bookNow).subscribe();
    this.ngOnInit();
    // this.clear();
  }

  clear(){
    this.paymentService.payment = {
      payid: null,
      custid: 1,
      bookingid: null,
      paydate: new Date(),
      amount: null,
      paytype: '',
      status: 'Paid'
    };
    this.cardNumber = '';
    this.service.bookh.subtotal = null
  }

  clearCart(){
    this.cart.clear();
  }
  
  showToastr(){
    this.toastr.success('Payment Successfull...', 'Dhrubo Travel Agency', {
        timeOut: 1000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }

  createPayment(payment: Payment){
    this.paymentService.createPayment(payment).subscribe();
    this.ngOnInit();
    this.updatePayment();
    this.showToastr();
    this.clear();
  }


}
