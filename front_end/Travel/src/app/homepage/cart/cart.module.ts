import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cart } from './cart';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  providers: [Cart],
  exports:[CartComponent]
})
export class CartModule { }
