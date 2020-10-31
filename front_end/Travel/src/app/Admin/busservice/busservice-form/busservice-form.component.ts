import { Component, OnInit } from '@angular/core';
import { BusserviceService } from '../busservice.service';
import { ToastrService } from 'ngx-toastr';
import { Bus } from '../busservice';

@Component({
  selector: 'app-busservice-form',
  templateUrl: './busservice-form.component.html',
  styleUrls: ['./busservice-form.component.css']
})
export class BusserviceFormComponent implements OnInit {

  constructor(public busService: BusserviceService,
    private toastr: ToastrService) {}

  showToastr(){
    this.toastr.success('Data Submitted Successfully...', 'Dhrubo Travel Agency', {
      // not mandatory, u can use it in individual component
        timeOut: 1000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }
  showToastr1(){
    this.toastr.success('Data Updated Successfully...', 'Dhrubo Travel Agency', {
      // not mandatory, u can use it in individual component
        timeOut: 1000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }

  // selectChange(event: any) {
  //   this.selectCustId = event.target.value;
  // }

  ngOnInit() {
    
  }

  createOrUpdate(currentBus: Bus) {
    if (currentBus.busid != null) {
      this.updateBus(currentBus);
    } else {
      this.createBus(currentBus);
    }
  }

  updateBus(currentBus: Bus) {
    this.busService.updateBusDetails(currentBus).subscribe();
    this.showToastr1();
    this.clear();
  }

  createBus(currentBus: Bus) {
    this.busService.createBusDetails(currentBus).subscribe();
    this.ngOnInit();
    this.showToastr();
    this.clear();
  }

  clear() {
    this.busService.allBus = {
      busid: null,
      busname: '',
      start: '',
      end: '',
      fare: null,
      status: '',
      transdetid: null
    };
  }

}
