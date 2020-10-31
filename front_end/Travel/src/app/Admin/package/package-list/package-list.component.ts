import { Component, OnInit } from '@angular/core';
import { Pack } from '../packag';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Pack[];

  constructor(private packService : PackageService) { }

  ngOnInit() {
    this.getAllPackage();
    this.packService.refreshNeeded$.subscribe(() => {
      this.getAllPackage();
    });
    this.getAllPackage();
  }

  getAllPackage() {
    this.packService.getAllPackage().subscribe((data: Pack[]) => {
      this.packages = data;
    });
  }

  deletePack(tpackid: number) {
    this.packService.deletePackage(tpackid).subscribe((data: Pack) => {
      this.getAllPackage();
      alert("Do you want to delete...???");
    });
  }

  editPack(pc: Pack) {
    this.packService.allPackage = Object.assign({}, pc);
    
  }
}
