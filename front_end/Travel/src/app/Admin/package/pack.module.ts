import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from './pack.component';
import { PackageFormComponent } from './package-form/package-form.component';
import { PackageListComponent } from './package-list/package-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PackageService } from './package.service';


@NgModule({
  declarations: [PackageComponent, PackageFormComponent, PackageListComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ],
  providers: [PackageService],
  exports: [PackageListComponent, PackageFormComponent]
})
export class PackageModule { }
