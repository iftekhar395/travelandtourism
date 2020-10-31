import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/Admin/package/package.service';
import { Pack } from 'src/app/Admin/package/packag';
import { Hotel } from 'src/app/Admin/hotel/hotel';
import { HotelService } from 'src/app/Admin/hotel/hotel.service';
import { TransportService } from 'src/app/Admin/transport/transport.service';
import { Transport } from 'src/app/Admin/transport/transport';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private packService: PackageService, private hotelService: HotelService, private transportService: TransportService) { }

  packages : Pack[];
  hotels: Hotel[];
  resorts: Hotel[];
  transports: Transport[];
  ngOnInit() {
    this.getAll();
    this.packService.refreshNeeded$.subscribe(() => {
      this.getAll();
    });
    this.getAll();
    
    this.getTransports();
    this.transportService.refreshNeeded$.subscribe(() => {
      this.getTransports();
    });
    this.getTransports();

    
    this.getHotels();
    this.hotelService.refreshNeeded$.subscribe(() => {
      this.getHotels();
    });
    this.getHotels();

    
    this.getResorts();
    this.hotelService.refreshNeeded$.subscribe(() => {
      this.getResorts();
    });
    this.getResorts();
  }

  getAll(){
    this.packService.getLimitedPackage().subscribe((data: Pack[]) => {
      this.packages = data;
    });
  }
  getHotels(){
    this.hotelService.getLtdHotel().subscribe((data: Hotel[]) => {
      this.hotels = data;
    });
  }
  getResorts(){
    this.hotelService.getLtdResort().subscribe((data: Hotel[]) => {
      this.resorts = data;
    });
  }

  getTransports(){
    this.transportService.getLimitedTransport().subscribe((data: Transport[]) => {
      this.transports = data;
    });
  }
}
