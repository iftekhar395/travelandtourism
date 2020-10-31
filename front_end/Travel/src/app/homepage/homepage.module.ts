import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule, NgbDropdownItem, NgbCollapse, NgbCollapseModule, NgbDropdownModule, NgbModule, NgbDropdownAnchor, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbNavbar } from '@ng-bootstrap/ng-bootstrap';
import { ShowGuidesComponent } from './show-guides/show-guides.component';
import { ShowCarsComponent } from './show-cars/show-cars.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { TransportsComponent } from './transports/transports.component';
import { ShowBusesComponent } from './show-buses/show-buses.component';
import { PackagesComponent } from './packages/packages.component';
import { ShowResortComponent } from './show-resort/show-resort.component';
import { RouterModule } from '@angular/router';
import { PayforbookComponent } from './payforbook/payforbook.component';


@NgModule({
  declarations: [HomepageComponent, ShowGuidesComponent, ShowCarsComponent, ShowBusesComponent, AboutusComponent, ContactComponent, PackagesComponent, ShowResortComponent, PayforbookComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule, NgbCarouselModule, RouterModule
  ],
  exports: []
})
export class HomepageModule { }
