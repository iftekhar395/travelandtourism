import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart';
import { LowerCasePipe } from '@angular/common';
import { Hotel } from 'src/app/Admin/hotel/hotel';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SelectorMatcher } from '@angular/compiler';
import { on } from 'process';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../login/login.component';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})

export class BsNavbarComponent implements OnInit {
   
  toggleOn: boolean = true;
  constructor(public service: CustomerService, public cart: Cart,private router: Router, private toastr: ToastrService) { }
  search: string = '';
  // home: string = 'home' && 'main page' && 'home page' && 'homepage';
  // hotel: string = 'hotel' && 'hotels';
  // pack: string = 'tour' && 'tours';
  // resort: string = 'resort' && 'resorts';
  // contact: string = 'contact' && 'contact info' && 'customer care' && 'helpline' && 'help' && 'online support'; 
  // about: string = 'about' && 'about dhrubo travel agency' && 'about company';
  // carRent: string = 'rent a car' || 'car rent' && 'car hire' && 'hire a car' && 'need a car' && 'want a car' && 'car' && 'cars';
  // busRent: string = 'rent a bus' && 'bus rent' && 'bus hire' && 'hire a bus' && 'want a bus' && 'bus' && 'buses';
  
  ngOnInit() {
  }

  searchAnything( value: string ){
    console.log(this.search);
    if(value.toLowerCase() == 'hotel' || value.toLowerCase() =='hotels'){
       this.router.navigateByUrl("/dhrubo/hotels");
    }else if(value.toLowerCase() == 'tour' || value.toLowerCase() == 'tours'){
      this.router.navigateByUrl("/dhrubo/tours");
    }else if(value.toLowerCase() == 'resort' || value.toLowerCase() == 'resorts'){
      this.router.navigateByUrl("/dhrubo/tours");
    }else if(value.toLowerCase() == 'rent a car' || value.toLowerCase() == 'car rent' || value.toLowerCase() == 'car hire' || value.toLowerCase() == 'hire a car' || value.toLowerCase() == 'need a car' || value.toLowerCase() == 'want a car' || value.toLowerCase() == 'car' || value.toLowerCase() == 'cars'){
      this.router.navigateByUrl("/dhrubo/cars");
    }else if(value.toLowerCase() == 'rent a bus' || value.toLowerCase() == 'bus rent' || value.toLowerCase() == 'bus hire' || value.toLowerCase() == 'hire a bus' || value.toLowerCase() == 'want a bus' || value.toLowerCase() == 'bus' || value.toLowerCase() == 'buses'){
      this.router.navigateByUrl("/dhrubo/buses");
    }else if(value.toLowerCase() == 'about' || value.toLowerCase() == 'about dhrubo travel agency' || value.toLowerCase() == 'about company'){
      this.router.navigateByUrl("/dhrubo/aboutus");
    }else if(value.toLowerCase() == 'contact' || value.toLowerCase() == 'contact info' || value.toLowerCase() == 'customer care' || value.toLowerCase() == 'helpline' || value.toLowerCase() == 'help' || value.toLowerCase() == 'online support'){
      this.router.navigateByUrl("/dhrubo/contact");
    }else if(value.toLowerCase() == 'home' || value.toLowerCase() == 'main page' || value.toLowerCase() == 'home page' || value.toLowerCase() == 'homepage'){
      this.router.navigateByUrl("/dhrubo/homepage");
    }
    else{
      this.showToastr();
    }
    this.clear();
  }

  clear(){
    this.search = '';
  }

  signOut(){
    this.service.userRole1=[];
    this.clearCart();
  }
  clearCart(){
    this.cart.clear();
  }

  logIn(){
    console.log(this.service.userRole1.length);
   if(this.service.userRole1.length==0){
    this.router.navigateByUrl("/dhrubo/login");
   }else{
      if(this.service.userRole1[0][0].role=="Admin"){
        this.router.navigateByUrl("/dhrubo/admin/dashboard");
      }else if (this.service.userRole1[0][0].role=="Customer") {
        this.router.navigateByUrl("/dhrubo/user/fpage");
        
      } else {
        this.router.navigateByUrl("/dhrubo/agent");
        
      }

    }
  }

  logIn1(){
    if(this.service.userRole1.length==0){
      this.router.navigateByUrl("/dhrubo/login");
     }
  }

  showToastr(){
    this.toastr.error('Not Found...', 'Dhrubo Travel Agency', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }
}
