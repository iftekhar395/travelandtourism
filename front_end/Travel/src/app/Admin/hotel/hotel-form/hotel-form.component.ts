import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {
  
  // imgUrl: string = "/assets/images/1.jpg";
  // fileToUpload : File = null;
  constructor(public hotelService: HotelService,
    private toastr: ToastrService) { }

  ngOnInit(){
  }

  // handleFileInput(file: FileList){
  // this.fileToUpload= file.item(0);
  // // Show image preview
  // var reader = new FileReader();
  // reader.onload = (event: any)=>{
  //   this.imgUrl = event.target.result;
  // }
  // reader.readAsDataURL(this.fileToUpload);
  // }

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
    this.hotelService.updateHotel(currentHotel).subscribe();
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
    this.hotelService.currentHotel1 = {
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
