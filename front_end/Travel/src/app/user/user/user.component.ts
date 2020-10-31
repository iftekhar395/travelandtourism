import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { Cart } from 'src/app/homepage/cart/cart';
import { Customer } from 'src/app/Admin/customer/customer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service: CustomerService, public cart:Cart) { }


  ngOnInit() {
    // localStorage.setItem("custid",);
    // sessionStorage.setItem()
  }

  signOut(){
    this.service.userRole1=[];
    this.clearCart();
  }

  
  clearCart(){
    this.cart.clear();
  }

  
}
