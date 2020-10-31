import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotelService } from './hotel.service';



@NgModule({
  declarations: [HotelFormComponent, HotelListComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ],
  providers: [HotelService],
  exports: [HotelListComponent, HotelFormComponent]
})
export class HotelModule { }
