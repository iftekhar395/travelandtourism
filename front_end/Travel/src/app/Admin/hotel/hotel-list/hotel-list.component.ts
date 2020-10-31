import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { Hotel1 } from './hotel1';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  

  constructor(public hotelService: HotelService) { }

  ngOnInit(){
    this.getAllHotel();
    this.hotelService.refreshNeeded$.subscribe(() => {
      this.getAllHotel();
    });
    this.getAllHotel();
    console.log(this.hotelService.hotel);
  }

  getAllHotel() {
    this.hotelService.getAllHotel().subscribe((data: Hotel1[]) => {
      this.hotelService.hotel = data;
    });
  }

  deleteHotel(hdetid: number) {
    this.hotelService.deleteHotel(hdetid).subscribe((data: Hotel1) => {
      this.getAllHotel();
      alert("Do you want to delete...???");
    });
  }

  editHotel(hotel: Hotel1) {
    this.hotelService.currentHotel1 = Object.assign({}, hotel);
    
  }
}
