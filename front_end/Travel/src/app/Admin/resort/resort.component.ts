import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HotelService } from '../hotel/hotel.service';
import { Hotel } from '../hotel/hotel';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.css']
})
export class ResortComponent implements OnInit {
  allHotel: Hotel[];
  constructor(public hotelService: HotelService,
    private toastr: ToastrService) { }

    ngOnInit(){
      this.getAllHotel();
      this.hotelService.refreshNeeded$.subscribe(() => {
        this.getAllHotel();
      });
      this.getAllHotel();
    }
  
    getAllHotel() {
      this.hotelService.getAllResort().subscribe((data: Hotel[]) => {
        this.allHotel = data;
      });
    }
  
    deleteHotel(hdetid: number) {
      this.hotelService.deleteResort(hdetid).subscribe((data: Hotel) => {
        this.getAllHotel();
        alert("Do you want to delete...???");
      });
    }
  
    editHotel(hotel: Hotel) {
      this.hotelService.currentHotel = Object.assign({}, hotel);
      
    }
  showToastr(){
    this.toastr.success('Data Submitted Successfully...', 'Dhrubo Travel Agency', {
        timeOut: 1000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }
  showToastr1(){
    this.toastr.success('Data Updated Successfully...', 'Dhrubo Travel Agency', {
        timeOut: 1000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }

  updateHotel(currentHotel: Hotel) {
    this.hotelService.updateResort(currentHotel).subscribe();
    this.showToastr1();
    this.clear();
  }

  createHotel(currentHotel: Hotel) {
    this.hotelService.createHotel(currentHotel).subscribe();
    this.ngOnInit();
    this.showToastr();
    this.clear();
  }

  clear() {
    this.hotelService.currentHotel = {
    hdetid : null,
    hagentid : null,
    roomtype : '',
    rent : null,
    facilities : '',
    type: '',
    imgurl: '',
    };
  }
}
