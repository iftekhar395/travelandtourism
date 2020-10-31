import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/homepage/cart/cart';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public service: CustomerService, public cart:Cart) { }

  ngOnInit(): void {
  }

  
  signOut(){
    this.service.userRole1=[];
    this.clearCart();
  }

  
  clearCart(){
    this.cart.clear();
  }
}
