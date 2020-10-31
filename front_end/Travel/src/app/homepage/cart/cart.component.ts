import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { Booknow } from '../booknow/booknow';
import { BooknowService } from '../booknow/booknow.service';
import { CartLine } from './cartLine';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { Customer } from 'src/app/Admin/customer/customer';
import { Pack } from 'src/app/Admin/package/packag';
import { PaymentService } from 'src/app/Admin/payment/payment.service';
import { Payment } from 'src/app/Admin/payment/payment';
import { Bookhotel } from '../booknow/bookhotel';
import { Packcart } from './packcart';
import { Bus } from 'src/app/Admin/busservice/busservice';
import { TransportService } from 'src/app/Admin/transport/transport.service';
import { BusserviceService } from 'src/app/Admin/busservice/busservice.service';
import { Transportcart } from './transportcart';
import { Hotel } from 'src/app/Admin/hotel/hotel';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // currentDate1: Date = new Date();
  currentDate: Date = new Date();
  
  public errorMessage : string="Sorry!!! The item is not available within your desired date. Pls, choose another date.";
  // showAlert: string = '';
  bookHotel: Bookhotel;
  bookNow: Booknow;
  customer: Customer;
  payment: Payment;
  pack: Pack;
  bus: Bus;
  hotel: Hotel;
  constructor(
    public cart: Cart,
    public service: BooknowService,
    public cusService: CustomerService,
    public payService: PaymentService,

  ) {
    console.log("single booking: ", this.service.bookNow);
    console.log("custid:",  cusService.userRole1[0][1].custid);
  }
  
  ngOnInit() {}

  formatDate(): any {
    const a = this.currentDate.getFullYear();
    const b = this.currentDate.getMonth() + 1;
    const c = this.currentDate.getDate();
    const d = this.currentDate.getHours();
    const e = this.currentDate.getMinutes();
    const f = this.currentDate.getSeconds();
    if (b <= 9) {
      return `${a}-0${b}-${c} ${d}:${e}:${f}`;
    } else {
      return `${a}-${b}-${c} ${d}:${e}:${f}`;
    }
  }

  getCustomerById(custid: number) {
    this.cusService.getCustomerById(custid).subscribe((data: Customer) => {
      this.cusService.currentCustomer = Object(data);
    });
    console.log(this.formatDate());
  }
  
  getAllHtlBooking(custid: number, bdate: Date) {
    this.getAllHotelBooking(custid,bdate);
    // this.getAllHotelBooking(custid,bdate);
  }
  getAllHotelBooking(custid: number, bdate: Date) {
    this.service.getAllHotelBooking(custid, bdate).subscribe((data: Object[]) => {
      this.service.allhotelbooking = Object(data);
    });
  }

  createHotelBook(cart: CartLine[],pck: Packcart[],tcart: Transportcart[]) {
    this.createBookNow(cart);
    this.createHotelNow(cart);
    this.createNow(pck);
    this.createPackNow(pck);
    this.createBusNow(tcart);
    this.createBusBookNow(tcart);
  }

  createBookNow(cart: CartLine[]) {
    for (let i = 0; i < cart.length; i++) {
      this.addbooknow(
        cart[i].defaultFrom,
        cart[i].defaultTo,
        cart[i].tperson,
        this.currentDate
      );
      this.service.bookNow[i].custid = this.cusService.userRole1[0][1].custid;
      this.service.bookNow[i].tourstart = cart[i].defaultFrom;
      this.service.bookNow[i].tourend = cart[i].defaultTo;
      this.service.bookNow[i].totalperson = cart[i].tperson;
      this.service.bookNow[i].bookingdate = this.currentDate;
      this.service.createBooking(this.service.bookNow[i]).subscribe();

      // this.clear();
    }
  }

  
  createHotelNow(cart: CartLine[]) {
    for (let i = 0; i < cart.length; i++) {
      this.addhotelnow(
        cart[i].hotel.hdetid,
        cart[i].lineTotal,
        cart[i].quantity
      );

      this.service.hotelBook[i].busid = 0;
      this.service.hotelBook[i].hdetid = cart[i].hotel.hdetid;
      this.service.hotelBook[i].subtotal = cart[i].lineTotal;
      this.service.hotelBook[i].totalroom = cart[i].quantity;
      this.service.hotelBook[i].paystatus = "Pending";
      this.service.createHotelBooking(this.service.hotelBook[i]).subscribe();

      // this.clear();
    }
  }

  createPackNow(pck: Packcart[]) {
    for (let i = 0; i < pck.length; i++) {
      this.addbooknow(
        pck[i].defaultFrom,
        pck[i].defaultTo,
        pck[i].tperson,
        this.currentDate
      );
      this.service.bookNow[i].custid = this.cusService.userRole1[0][1].custid;
      this.service.bookNow[i].tpackid = pck[i].pack.tpackid;
      this.service.bookNow[i].tourstart = pck[i].defaultFrom;
      this.service.bookNow[i].tourend = pck[i].defaultTo;
      this.service.bookNow[i].totalperson = pck[i].tperson;
      this.service.bookNow[i].bookingdate = this.currentDate;
      this.service.createBooking(this.service.bookNow[i]).subscribe();

    }
  }

  createNow(pck: Packcart[]) {
    for (let i = 0; i < pck.length; i++) {
      this.addhotelnow(
        
        pck[i].lineTotal,
        pck[i].quantity,
        null
      );
      this.service.hotelBook[i].hdetid = 0;
      this.service.hotelBook[i].subtotal = pck[i].lineTotal;
      this.service.hotelBook[i].totalroom = pck[i].quantity;
      this.service.hotelBook[i].paystatus = "Pending";
      this.service.createHotelBooking(this.service.hotelBook[i]).subscribe();

      // this.clear();
    }
  }
  createBusNow(tcart: Transportcart[]) {
    for (let i = 0; i < tcart.length; i++) {
      this.addbooknow(
        tcart[i].defaultFrom,
        tcart[i].defaultTo,
        tcart[i].tperson,
        this.currentDate
      );
      this.service.bookNow[i].custid = this.cusService.userRole1[0][1].custid;
      this.service.bookNow[i].tourstart = tcart[i].defaultFrom;
      this.service.bookNow[i].tourend = tcart[i].defaultTo;
      this.service.bookNow[i].totalperson = tcart[i].tperson;
      this.service.bookNow[i].bookingdate = this.currentDate;
      this.service.createBooking(this.service.bookNow[i]).subscribe();

    }
  }
  createBusBookNow(cart: Transportcart[]) {
    for (let i = 0; i < cart.length; i++) {
      this.addhotelnow(
        cart[i].bd.busid,
        cart[i].lineTotal,
        cart[i].quantity
      );

      this.service.hotelBook[i].hdetid = 0;
      this.service.hotelBook[i].busid = cart[i].bd.busid;
      this.service.hotelBook[i].subtotal = cart[i].lineTotal;
      this.service.hotelBook[i].totalroom = cart[i].quantity;
      this.service.hotelBook[i].paystatus = "Pending";
      this.service.createHotelBooking(this.service.hotelBook[i]).subscribe();

    }
  }
  
  // createBookPay(bookHotel: Bookhotel,bookNow: Booknow, cart: CartLine){
  //   this.createBookHotel(bookHotel,cart);
  //   this.createBookNow(bookNow, cart);
  // }
  // createPayment(payment: Payment,bookNow: Booknow){
  //   payment.custid = bookNow.custid;
  //   this.payService.createPayment(payment).subscribe;
  //   this.ngOnInit;
  // }

  // createBookNow(bookNow: Booknow, cart: CartLine){
  //   bookNow.tourstart = cart.defaultFrom;
  //   bookNow.tourend = cart.defaultTo;
  //   bookNow.totalperson = cart.tperson;
  //   this.service.createBooking(bookNow).subscribe();
  //   this.ngOnInit();
  //   // this.clear();
  // }

  // createBookHotel(bookHotel: Bookhotel, cart: CartLine){
  //   bookHotel.totalroom = cart.quantity;
  //   bookHotel.subtotal = cart.lineTotal;
  //   bookHotel.hdetid = cart.hotel.hdetid;
  //   this.service.createHotelBooking(bookHotel).subscribe();
  //   this.ngOnInit();
  //   // this.clear();
  // }

  addbooknow(
    tourstart: String,
    tourend: String,
    totalperson: number,
    bookingdate: Date
  ) {
    this.service.bookNow.push(
      new Booknow(tourstart, tourend, totalperson, bookingdate)
    );

    console.log(this.service.bookNow);
  }

  addhotelnow(hdetid: number, totalroom: number, subtotal: number) {
    this.service.hotelBook.push(new Bookhotel(hdetid, totalroom, subtotal));
  }

}
