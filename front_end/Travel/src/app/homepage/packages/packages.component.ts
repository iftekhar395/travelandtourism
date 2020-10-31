import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/Admin/package/package.service';
import { Pack } from 'src/app/Admin/package/packag';
import { Cart } from '../cart/cart';
import { Hotel } from 'src/app/Admin/hotel/hotel';
import { Booknow } from '../booknow/booknow';
import { BooknowService } from '../booknow/booknow.service';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, public cservice: CustomerService, private bnowService: BooknowService, private packService: PackageService, private cart: Cart) { }
  hotel: Hotel;
  packages : Pack[];
  ngOnInit() {
    this.getAll();
    this.packService.refreshNeeded$.subscribe(() => {
      this.getAll();
    });
    this.getAll();
  }

  getAll(){
    this.packService.getAllPackage().subscribe((data: Pack[]) => {
      this.packages = data;
    });
  }

  getPackById(tpackid: number,custid: number) {
    this.bnowService.getPackBookById(tpackid,custid).subscribe((data: Booknow[]) => {
      this.bnowService.bookNowPack = data;
    });
    
  }

  getPackByIdB(tpackid: number,custid: number) {
    this.bnowService.getPackBookById(tpackid,custid).subscribe((data: Booknow[]) => {
      this.bnowService.bookNowPack = data;
    });
    this.router.navigateByUrl("/dhrubo/cart");
  }
  addProductToCart(pack: Pack){
    this.cart.addLine2(pack);
  }
  
  
  err(e){
    console.log(e.type)
    if(this.cservice.userRole1.length==0){
      this.showToastr();
    }
  }

  showToastr(){
    this.toastr.error('Pls, First Sign in...', 'Dhrubo Travel Agency', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }
}
