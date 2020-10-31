import { Component, OnInit } from '@angular/core';
import { Bus } from '../busservice';
import { BusserviceService } from '../busservice.service';

@Component({
  selector: 'app-busservice-list',
  templateUrl: './busservice-list.component.html',
  styleUrls: ['./busservice-list.component.css']
})
export class BusserviceListComponent implements OnInit {

  getBus: Bus[];

  constructor(private busService: BusserviceService
    ) {}


  ngOnInit() {this.getAllBus();
    this.busService.refreshNeeded$.subscribe(() => {
      this.getAllBus();
    });
    this.getAllBus();

  }

  getAllBus() {
    this.busService.getAllBus().subscribe((data: Bus[]) => {
      this.getBus = data;
    });
  }

  deleteBus(bus: Bus) {
    this.busService.deleteBus(bus).subscribe((data: Bus) => {
      this.getAllBus();
      alert("Do you want to delete...???");
    });
  }

  editBus(bus: Bus) {
    this.busService.allBus = Object.assign({}, bus);
    
  }
}
