import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookinginfoComponent } from './bookinginfo/bookinginfo.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooknowService } from 'src/app/homepage/booknow/booknow.service';



@NgModule({
  declarations: [BookingFormComponent, BookingListComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ],
  providers: [BooknowService],
  
  exports: [BookingFormComponent, BookingListComponent]
})
export class BookingModule { }
