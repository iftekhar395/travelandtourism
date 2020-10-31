import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusserviceListComponent } from './busservice-list/busservice-list.component';
import { BusserviceFormComponent } from './busservice-form/busservice-form.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BusserviceService } from './busservice.service';



@NgModule({
  declarations: [BusserviceListComponent, BusserviceFormComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ],
  providers: [BusserviceService],
  exports: [BusserviceListComponent, BusserviceFormComponent]
})
export class BusserviceModule { }
