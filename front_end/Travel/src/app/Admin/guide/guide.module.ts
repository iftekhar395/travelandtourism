import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideFormComponent } from './guide-form/guide-form.component';
import { GuideListComponent } from './guide-list/guide-list.component';
import { GuideService } from './guide.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [GuideFormComponent, GuideListComponent],
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [GuideService],
  exports: [GuideListComponent, GuideFormComponent]
})
export class GuideModule { }
