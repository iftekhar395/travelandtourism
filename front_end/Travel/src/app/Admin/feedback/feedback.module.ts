import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackinfoComponent } from './feedbackinfo/feedbackinfo.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackService } from './feedback.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [FeedbackListComponent],
  imports: [
    CommonModule,  FormsModule, HttpClientModule
  ],
  providers: [FeedbackService],
  exports: [FeedbackListComponent]
})
export class FeedbackModule { }
