import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TransportService } from '../transport.service';
import { Transport } from '../transport'

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.css']
})
export class TransportFormComponent implements OnInit {

  constructor(public transService: TransportService,
    private toastr: ToastrService) { }

  ngOnInit() {
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

  // createOrUpdate(currentCustomer: Customer) {
  //   if (currentCustomer.custid != null) {
  //     this.updateCustomer(currentCustomer);
  //   } else {
  //     this.createCustomer(currentCustomer);
  //   }
  // }

  updateTrans(currentTransport: Transport) {
    this.transService.updateTransport(currentTransport).subscribe();
    this.showToastr1();
    this.clear();
  }

  createTrans(currentTransport: Transport) {
    this.transService.createTransport(currentTransport).subscribe();
    this.ngOnInit();
    this.showToastr();
    this.clear();
  }

  clear() {
    this.transService.currentTransport = {
      transdetid: null,
      tagentid: null,
      tpackid: null,
      transtype: '',
      transdetails: 'Car Model: \n'+'Capacity : \n'+'Engine Size : \n'+'Type: ',
      image: ''
    };
  }

}
