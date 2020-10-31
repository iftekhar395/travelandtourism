import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/Admin/transport/transport.service';
import { Transport } from 'src/app/Admin/transport/transport'
import { Cart } from '../cart/cart';
import { Bus } from 'src/app/Admin/busservice/busservice';
import { BusserviceService } from 'src/app/Admin/busservice/busservice.service';
import { Booknow } from '../booknow/booknow';
import { BooknowService } from '../booknow/booknow.service';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-buses',
  templateUrl: './show-buses.component.html',
  styleUrls: ['./show-buses.component.css']
})
export class ShowBusesComponent implements OnInit {
  allBus: Bus[];
  allTransport: Transport[];
  constructor(private toastr: ToastrService, public cservice: CustomerService, private bnowService: BooknowService, private transportService: TransportService, private busService: BusserviceService, private cart: Cart) { }

  ngOnInit() {
    this.getBusTransport();
    this.transportService.refreshNeeded$.subscribe(() => {
      this.getBusTransport();
    });
    this.getBusTransport();
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
  
  getBusById(busid: number,custid: number) {
    this.bnowService.getTransportBookById(busid,custid).subscribe((data: Booknow[]) => {
      this.bnowService.bookNowTrans = data;
    });
    
  }

  getBusTransport(){
    this.transportService.getAllBus().subscribe((data: Transport[]) => {
      this.allTransport = data;
    });
  }

  getTransport(id:number){
    this.busService.getBus(id).subscribe((data: Bus[]) => {
      this.allBus = data;
    });
  }
  
  addProductToCart(transport: Bus){
    this.cart.addLine3(transport);
  }

}
