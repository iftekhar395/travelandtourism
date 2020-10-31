import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Admin/customer/customer';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { Userrole } from 'src/app/Admin/customer/Userrole';
import { CustomerformComponent } from 'src/app/Admin/customer/customer-form/customerform.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public customerService: CustomerService,
    private toastr: ToastrService) { }


  ngOnInit() {
  }
  showToastr(){
    this.toastr.success('Data Submitted Successfully...', 'Dhrubo Travel Agency', {
      // not mandatory, u can use it in individual component
        timeOut: 1000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }

  showToastr1(){
    this.toastr.error('Pls fill up the field properly', 'Dhrubo Travel Agency', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }
  createCustomer(currentCustomer: Customer) {
    this.customerService.createCustomer(currentCustomer).subscribe();
    this.ngOnInit();
    this.clear();
  }
  createUser(userRole: Userrole) {
    this.customerService.createUserRole(userRole).subscribe();
    this.ngOnInit();
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
      role: '',
      status: '',
      emailid: '',
      password: ''
    };
  }
  
  createOrUpdate(currentCustomer: Customer, userRole: Userrole) {
    if (this.customerService.currentCustomer.custname === ''|| this.customerService.currentCustomer.custphone ==='' || this.customerService.currentCustomer.custaddress === '' ||  this.customerService.userRole.password === '' || this.customerService.currentCustomer.email === '' ||
    !this.customerService.currentCustomer.email.match('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$')){
    this.showToastr1();
    }else{
      this.createCustomer(currentCustomer);
      this.createUser(userRole);
      this.showToastr();
    }
      
  }
}
