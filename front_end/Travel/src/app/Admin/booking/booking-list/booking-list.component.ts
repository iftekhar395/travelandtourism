import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { BooknowService } from 'src/app/homepage/booknow/booknow.service';
import { ShowBooking } from 'src/app/homepage/booknow/showbooking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  cid: number = 0;
  constructor(private bookingService: BooknowService) { }
  showAll : ShowBooking[];

  ngOnInit() {this.getAllBooking();
    this.bookingService.refreshNeeded$.subscribe(() => {
      this.getAllBooking();
    });
    this.getAllBooking();

  }

  insertId(cid){
    if(cid==0){
      this.ngOnInit();
    }else{
      this.bookingService.getInBookingById(cid).subscribe((data: Object[]) => {
        this.showAll = Object(data);
      });
    }
  }

  getAllBooking() {
    this.bookingService.showAllBookings().subscribe((data: ShowBooking[]) => {
      this.showAll = data;
    });
  }
}
