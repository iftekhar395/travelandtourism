import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { Cart } from 'src/app/homepage/cart/cart';

@Component({
  selector: 'app-agent-sidebar',
  templateUrl: './agent-sidebar.component.html',
  styleUrls: ['./agent-sidebar.component.css']
})
export class AgentSidebarComponent implements OnInit {

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
