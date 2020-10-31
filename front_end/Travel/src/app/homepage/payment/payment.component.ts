import { Component, OnInit } from '@angular/core';
import { BooknowService } from '../booknow/booknow.service';
import { Booknow } from '../booknow/booknow';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  currentDate: number = Date.now();
  constructor(
    public service: BooknowService) { }

  ngOnInit() {
  }

  
  createBookNow(bookNow: Booknow){
    // bookNow.tourstart = cartLine.defaultFrom;
    // bookNow.tourend = cartLine.defaultTo;
    this.service.createBooking(bookNow).subscribe();
    this.ngOnInit();
    // this.clear();
  }
}
