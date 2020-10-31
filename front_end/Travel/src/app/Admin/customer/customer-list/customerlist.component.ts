import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Customeruser } from '../CustomerUser';
import { Userrole } from '../Userrole';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  cid: number = 0;
  getCustomer: Customer[];
  getUser: Userrole[];
  getuscus: Customeruser[];
  constructor(private customerService: CustomerService
    ) {}


  ngOnInit() {this.getAllUserCustomer();
    this.customerService.refreshNeeded$.subscribe(() => {
      this.getAllUserCustomer();
    });
    this.getAllUserCustomer();

  }

  insertId(id: number){
    if(id==0){
      // console.log(id);
      this.ngOnInit();
    }else{
      this.customerService.getUserById(id).subscribe((data: Object[]) => {
        this.getuscus = Object(data);
      });
    }
  }

  getAllUserCustomer() {
    this.customerService.getAllUserCustomer().subscribe((data: Object[]) => {
      this.getuscus = Object(data);
    });
  }
  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe((data: Customer[]) => {
      this.getCustomer = data;
    });
  }
  getAllUser() {
    this.customerService.getAllUser().subscribe((data: Userrole[]) => {
      this.getUser = data;
    });
  }

  deleteCustomerUser(customer: number, id: string){
    alert("Do you want to delete...???");
    this.deleteUser(id);
    this.deleteCustomer(customer);
  }

  deleteCustomer(customer: number) {
    this.customerService.deleteCustomer(customer).subscribe((data: Customer) => {
      this.getAllUserCustomer();
    });
  }
  deleteUser(id: string) {
    this.customerService.deleteUserRole(id).subscribe((data: Userrole) => {
      // this.getAllUser();
      this.getAllUserCustomer
    });
  }

  editCustomer(customer: Customer) {
    this.customerService.currentCustomer = Object.assign({}, customer);
  }
  editUser(user: Userrole) {
    this.customerService.userRole = Object.assign({}, user);
  }

  editUserCustomer(user: Customeruser) {
    this.customerService.customerUser = Object.assign({}, user);
  }

  editCustomerUser(customer: Customer,user: Userrole){
    this.editCustomer(customer);
    this.editUser(user);
  }
}
