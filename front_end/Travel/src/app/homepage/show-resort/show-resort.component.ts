import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/Admin/hotel/hotel.service';
import { Hotel } from 'src/app/Admin/hotel/hotel';
import { Cart } from '../cart/cart';
import { BooknowService } from '../booknow/booknow.service';
import { Booknow } from '../booknow/booknow';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-resort',
  templateUrl: './show-resort.component.html',
  styleUrls: ['./show-resort.component.css']
})
export class ShowResortComponent implements OnInit {

  allHotel: Hotel[];
  hotel: Hotel;
  constructor(private toastr: ToastrService, private hotelService: HotelService, private bnowService: BooknowService, private cart: Cart, public cservice: CustomerService) { }

  ngOnInit() {
    this.getHotel();
    this.hotelService.refreshNeeded$.subscribe(() => {
      this.getHotel();
    });
    this.getHotel();
  }

  getHotel() {
    this.hotelService.getAllResort().subscribe((data: Hotel[]) => {
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
}
