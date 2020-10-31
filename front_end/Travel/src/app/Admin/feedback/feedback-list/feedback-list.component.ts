import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

allFeedback : Feedback[];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.getAll();
    this.feedbackService.refreshNeeded$.subscribe(() => {
      this.getAll();
    });
    this.getAll();
  }

  getAll() {
    this.feedbackService.getAll().subscribe((data: Feedback[]) => {
      this.allFeedback = data;
    });
  }

  deleteFb(fid: number) {
    this.feedbackService.deleteFeedback(fid).subscribe((data: Feedback) => {
      this.getAll();
      alert("Do you want to delete...???");
    });
  }

}
