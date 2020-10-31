import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransportsComponent } from './transports.component';



@NgModule({
  declarations: [TransportsComponent],
  imports: [
    CommonModule,FormsModule, HttpClientModule
  ]
})
export class TransportsModule { }
