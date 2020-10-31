import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/Admin/transport/transport.service';
import { Transport } from 'src/app/Admin/transport/transport'
import { BusserviceService } from 'src/app/Admin/busservice/busservice.service';
import { Cart } from '../cart/cart';
import { Bus } from 'src/app/Admin/busservice/busservice';
import { BooknowService } from '../booknow/booknow.service';
import { Booknow } from '../booknow/booknow';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-cars',
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.css']
})
export class ShowCarsComponent implements OnInit {
  allBus: Bus[];
  allTransport : Object[];
  constructor(private toastr: ToastrService, public cservice: CustomerService, private bnowService: BooknowService, private transportService: TransportService, private busService: BusserviceService, private cart: Cart) { }

  ngOnInit(){
    this.getTransport();
    this.transportService.refreshNeeded$.subscribe(() => {
      this.getTransport();
    });
    this.getTransport();
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

  getTransport(){
    this.transportService.getAllCar().subscribe((data: Transport[]) => {
      this.allTransport = data;
    });
  }

  getCarById(busid: number,custid: number) {
    this.bnowService.getTransportBookById(busid,custid).subscribe((data: Booknow[]) => {
      this.bnowService.bookNowTrans = data;
    });
    
  }

  getCarTransport(id:number){
    this.busService.getBus(id).subscribe((data: Bus[]) => {
      this.allBus = data;
    });
  }
  addProductToCart(bus: Bus){
    this.cart.addLine4(bus);
  }
}
