import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BooknowService } from '../booknow/booknow.service';



@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  providers:[BooknowService]
})
export class Payment1Module { }
