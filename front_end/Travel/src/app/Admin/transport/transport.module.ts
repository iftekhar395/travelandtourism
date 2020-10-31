import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportListComponent } from './transport-list/transport-list.component';
import { TransportFormComponent } from './transport-form/transport-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransportService } from './transport.service';

@NgModule({
  declarations: [TransportListComponent, TransportFormComponent],
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [TransportService],
  exports: [TransportListComponent, TransportFormComponent]
})
export class TransportModule { }
