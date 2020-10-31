import { Component, OnInit } from '@angular/core';
import { GuideService } from '../guide.service';
import { ToastrService } from 'ngx-toastr';
import { Guide } from '../guideinfo/guide';

@Component({
  selector: 'app-guide-form',
  templateUrl: './guide-form.component.html',
  styleUrls: ['./guide-form.component.css']
})
export class GuideFormComponent implements OnInit {

  constructor(public guideService: GuideService,
    private toastr: ToastrService ) { }

  ngOnInit() {
  }

  showToastr(){
    this.toastr.success('Data Submitted Successfully...', 'Dhrubo Travel Agency', {
        timeOut: 1000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }
  showToastr1(){
    this.toastr.success('Data Updated Successfully...', 'Dhrubo Travel Agency', {
        timeOut: 1000,
        progressBar: true,
        progressAnimation: 'increasing'
    });
  }
  updateGuide(currentGuide: Guide) {
    this.guideService.updateGuide(currentGuide).subscribe();
    this.showToastr1();
    this.clear();
  }

  createGuide(currentGuide: Guide) {
    this.guideService.createGuide(currentGuide).subscribe();
    this.ngOnInit();
    this.showToastr();
    this.clear();
  }

  clear() {
    this.guideService.currentGuide = {
      gid: null,
      name: '',
      mobile: '',
      email: '',
      address: ''
    };
  }
}
