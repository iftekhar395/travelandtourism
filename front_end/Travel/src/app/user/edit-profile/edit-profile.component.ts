import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { Customer } from 'src/app/Admin/customer/customer';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


  constructor(public customerService: CustomerService,
  private toastr: ToastrService) {}
  custId: number = this.customerService.userRole1[0][1].custid;
  custEmail: string = this.customerService.userRole1[0][1].email;
  image: string = this.customerService.userRole1[0][1].image;
  custName: string = this.customerService.userRole1[0][1].custname;
  custPhone: string = this.customerService.userRole1[0][1].custid;
  custAddress: string = this.customerService.userRole1[0][1].custaddress;

  
  ngOnInit(): void {
  }

  editCustomer() {
    this.customerService.currentCustomer.custid=this.custId;
    this.customerService.currentCustomer.email=this.custEmail;
    this.customerService.currentCustomer.image=this.image;
    this.customerService.currentCustomer.custname=this.custName;
    this.customerService.currentCustomer.custphone=this.custPhone;
    this.customerService.currentCustomer.custaddress=this.custAddress;
    
  }
  
  updateCustomer(currentCustomer: Customer) {
    this.customerService.updateCustomer(currentCustomer).subscribe();
    this.showToastr1();
    this.clear();
  }
  
  clear() {
    this.customerService.currentCustomer = new Customer();
  }
  
  showToastr1(){
    this.toastr.success('Data Updated Successfully...', 'Dhrubo Travel Agency', {
      // not mandatory, u can use it in individual component
        timeOut: 1000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }
}
