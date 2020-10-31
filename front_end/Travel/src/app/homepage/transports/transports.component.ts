import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/Admin/transport/transport.service';
import { Transport } from 'src/app/Admin/transport/transport'
import { Bus } from 'src/app/Admin/busservice/busservice';
import { BusserviceService } from 'src/app/Admin/busservice/busservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.css']
})
export class TransportsComponent implements OnInit {

  allTransport: Transport[];
  allBus: Bus[];
  constructor(private transportService: TransportService, private busService: BusserviceService, private router: Router) { }

  ngOnInit() {
    this.getTransport();
    this.transportService.refreshNeeded$.subscribe(() => {
      this.getTransport();
    });
    this.getTransport();
  }

  getTransport(){
    this.transportService.getAllTransport().subscribe((data: Transport[]) => {
      this.allTransport = data;
    });
  }

  
  authenticate(transport:string){
    if(transport == "Car"){  
        this.router.navigateByUrl("/dhrubo/cars");
    }
    else{
      this.router.navigateByUrl("/dhrubo/buses");
    }
  }
}
