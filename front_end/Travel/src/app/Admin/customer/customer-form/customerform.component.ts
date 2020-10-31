import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Userrole } from '../Userrole';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {
  // selectCustId: number = null;
  constructor(public customerService: CustomerService,
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

  createOrUpdate(currentCustomer: Customer, userRole: Userrole) {
    // if (currentCustomer.custid != null || userRole.email !=null) {
    //   this.updateCustomer(currentCustomer);
    //   this.updateUser(userRole);
    // } else {
      this.createCustomer(currentCustomer);
      this.createUser(userRole);
    // }
  }
  Update(currentCustomer: Customer, userRole: Userrole) {
    if (currentCustomer.custid != null || userRole.emailid !=null) {
      // if (currentCustomer.custid != null) {
      this.updateCustomer(currentCustomer);
      this.updateUser(userRole);
    }
  }
  updateCustomer(currentCustomer: Customer) {
    this.customerService.updateCustomer(currentCustomer).subscribe();
    this.showToastr1();
    this.clear();
  }

  createCustomer(currentCustomer: Customer) {
    this.customerService.createCustomer(currentCustomer).subscribe();
    this.ngOnInit();
    this.showToastr();
    this.clear();
  }

  clear() {
    this.customerService.currentCustomer = {
      custid: null,
      custname: '',
      custphone: '',
      email: '',
      custaddress: '',
      image: ''
    };
    this.customerService.userRole={
      role: 'Customer',
      status: 'Active',
      emailid: '',
      password: ''
    };
  }

  
  updateUser(userRole: Userrole) {
    this.customerService.updateUserRole(userRole).subscribe();
    this.clear();
  }

  createUser(userRole: Userrole) {
    this.customerService.createUserRole(userRole).subscribe();
    this.ngOnInit();
    this.clear();
  }
}
