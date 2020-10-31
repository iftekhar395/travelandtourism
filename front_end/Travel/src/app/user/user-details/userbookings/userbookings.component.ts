import { Component, OnInit } from '@angular/core';
import { BooknowService } from 'src/app/homepage/booknow/booknow.service';
import { ShowBooking } from 'src/app/homepage/booknow/showbooking';
import { CustomerService } from 'src/app/Admin/customer/customer.service';

@Component({
  selector: 'app-userbookings',
  templateUrl: './userbookings.component.html',
  styleUrls: ['./userbookings.component.css']
})
export class UserbookingsComponent implements OnInit {


  constructor(private bookingService: BooknowService,
              public service: CustomerService) { }
  showAll : Object[];
  custId: number = this.service.userRole1[0][1].custid;
  ngOnInit() {this.getIndividualBooking(this.custId);
    this.bookingService.refreshNeeded$.subscribe(() => {
      this.getIndividualBooking(this.custId);
    });
    this.getIndividualBooking(this.custId);

  }

  cid: number = 0;
  insertId(cid){
    if(cid==0){
      this.ngOnInit();
    }else{
      this.bookingService.getInBookingById(cid).subscribe((data: Object[]) => {
        this.showAll = Object(data);
      });
    }
  }

  getIndividualBooking(custid: number) {
    this.bookingService.getIndividualBookings(custid).subscribe((data: Object[]) => {
      this.showAll = data;
    });
  }

}
