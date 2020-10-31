import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule,
  ],
  providers:[LoginComponent]
})
export class BsNavbarModule { }
