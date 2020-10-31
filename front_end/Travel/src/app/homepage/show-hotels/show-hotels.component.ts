import { Component, OnInit } from '@angular/core';
import { HotelListComponent } from 'src/app/Admin/hotel/hotel-list/hotel-list.component';
import { HotelService } from 'src/app/Admin/hotel/hotel.service';
import { Hotel } from 'src/app/Admin/hotel/hotel';
import { Cart } from '../cart/cart';
import { Pack } from 'src/app/Admin/package/packag';
import { BooknowService } from '../booknow/booknow.service';
import { Duration } from '../booknow/duration';
import { Booknow } from '../booknow/booknow';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-hotels',
  templateUrl: './show-hotels.component.html',
  styleUrls: ['./show-hotels.component.css']
})
export class ShowHotelsComponent implements OnInit {
  
  allHotel: Hotel[];
  hotel: Hotel;
  duration: Duration;
  bnow: Booknow;

  constructor(private toastr: ToastrService, public cservice: CustomerService, private hotelService: HotelService, private cart: Cart, private bnowService: BooknowService) { }

  ngOnInit() {
    this.getHotel();
    this.hotelService.refreshNeeded$.subscribe(() => {
      this.getHotel();
    });
    this.getHotel();
  }

  
  err(e){
    console.log(e.type)
    if(this.cservice.userRole1.length==0){
      this.showToastr();
    }
  }

  showToastr(){
    this.toastr.error('Pls, First Sign in...', 'Dhrubo Travel Agency', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }


  getHotel() {
    this.hotelService.getAllHotel().subscribe((data: Hotel[]) => {
      this.allHotel = data;
    });
  }

  getHotelById(hdetid: number,custid: number) {
    this.bnowService.getHotelBookById(hdetid,custid).subscribe((data: Booknow[]) => {
      this.bnowService.bookNow = data;
    });
    
  }

  addProductToCart(hotel: Hotel){
    this.cart.addLine(hotel);
    // this.getHotelById(hdetid,custid);
  }
}
