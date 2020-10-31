import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerformComponent } from './customer-form/customerform.component';
import { CustomerService } from './customer.service';
import { CustomerlistComponent } from './customer-list/customerlist.component';

@NgModule({
  declarations: [CustomerlistComponent, CustomerformComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [CustomerService],
  exports: [CustomerlistComponent, CustomerformComponent]
})
export class CustomerModule {}
