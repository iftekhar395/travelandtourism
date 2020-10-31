import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { ToastrService } from 'ngx-toastr';
import { Pack } from '../packag';

@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.css']
})
export class PackageFormComponent implements OnInit {
  constructor(public pService: PackageService,
    private toastr: ToastrService) { }

  ngOnInit(){
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

  updatePack(allPackage: Pack) {
    this.pService.updatePackageDetails(allPackage).subscribe();
    this.showToastr1();
    this.clear();
  }

  createPack(pack: Pack) {
    this.pService.createPackageDetails(pack).subscribe();
    this.ngOnInit();
    this.showToastr();
    this.clear();
  }

  clear() {
    this.pService.allPackage = {
      tpackid: null,
      tpackfrom: '',
      tpackto: '',
      tpackfare: null,
      packagetype: '',
      packageday: '',
      packdesc: '',
      packimg: ''
    };
  }

}
