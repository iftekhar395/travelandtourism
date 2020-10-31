import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentinfoComponent } from './Admin/agent/agentinfo/agentinfo.component';
import { AppComponent } from './app.component';
import { HotelinfoComponent } from './Admin/hotel/hotelinfo/hotelinfo.component';
import { TransportinfoComponent } from './Admin/transport/transportinfo/transportinfo.component';
import { GuideinfoComponent } from './Admin/guide/guideinfo/guideinfo.component';
import { PaymentinfoComponent } from './Admin/payment/paymentinfo/paymentinfo.component';
import { FeedbackinfoComponent } from './Admin/feedback/feedbackinfo/feedbackinfo.component';
import { CustomerinfoComponent } from './Admin/customer/customerinfo/customerinfo.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookinginfoComponent } from './Admin/booking/bookinginfo/bookinginfo.component';
import { BsNavbarComponent } from './homepage/bs-navbar/bs-navbar.component';
import { ShowHotelsComponent } from './homepage/show-hotels/show-hotels.component';
import { ShowCarsComponent } from './homepage/show-cars/show-cars.component';
import { ShowBusesComponent } from './homepage/show-buses/show-buses.component';
import { ShowGuidesComponent } from './homepage/show-guides/show-guides.component';
import { LoginComponent } from './homepage/login/login.component';
import { BooknowComponent } from './homepage/booknow/booknow.component';
import { from } from 'rxjs';
import { SignupComponent } from './homepage/signup/signup.component';
import { ContactComponent } from './homepage/contact/contact.component';
import { AboutusComponent } from './homepage/aboutus/aboutus.component';
import { TransportsComponent } from './homepage/transports/transports.component';
import { BusserviceInfoComponent } from './Admin/busservice/busservice-info/busservice-info.component';
import { SidebarComponent } from './Admin/sidebar/sidebar.component';
import { StoreFirstGuard } from './storeFirst.guard';
import { CartComponent } from './homepage/cart/cart.component';
import { PaymentComponent } from './homepage/payment/payment.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { PackagesComponent } from './homepage/packages/packages.component';
import { PackageComponent } from './Admin/package/pack.component';
import { ShowResortComponent } from './homepage/show-resort/show-resort.component';
import { UserComponent } from './user/user/user.component';
import { AgentSidebarComponent } from './agent/agent-sidebar/agent-sidebar.component';
import { ReportComponent } from './Admin/report/report.component';
import { UserbookingsComponent } from './user/user-details/userbookings/userbookings.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { ResortComponent } from './Admin/resort/resort.component';
import { PayforbookComponent } from './homepage/payforbook/payforbook.component';
import { FrontPageComponent } from './user/front-page/front-page.component';
import { OrderReportComponent } from './user/order-report/order-report.component';

const routes: Routes = [
  { path: '', redirectTo: 'dhrubo/homepage', pathMatch: 'full' },
  { path: 'dhrubo/admin', component: SidebarComponent, canActivate:[StoreFirstGuard],
    children:[
      { path: 'busservice', component: BusserviceInfoComponent},
      { path: 'agent', component: AgentinfoComponent},
      { path: 'customer', component: CustomerinfoComponent },
      { path: 'hotel', component: HotelinfoComponent},
      { path: 'renttransport', component: TransportinfoComponent},
      { path: 'guide', component: GuideinfoComponent},
      { path: 'payment', component: PaymentinfoComponent},
      { path: 'feedback', component: FeedbackinfoComponent},
      { path: 'booking', component: BookinginfoComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'packages', component: PackageComponent},
      {path: 'reports', component: ReportComponent},
      {path: 'resorts', component: ResortComponent},
    ]
  },
  { path: 'dhrubo', component: BsNavbarComponent,
    children: [
    {path: 'homepage', component: HomepageComponent, canActivate:[StoreFirstGuard]},
    {path: 'hotels', component: ShowHotelsComponent, canActivate:[StoreFirstGuard]},
    {path: 'resorts', component: ShowResortComponent, canActivate:[StoreFirstGuard]},
    {path: 'cars', component: ShowCarsComponent, canActivate:[StoreFirstGuard]},
    {path: 'buses', component: ShowBusesComponent, canActivate:[StoreFirstGuard]},
    {path: 'guides', component: ShowGuidesComponent, canActivate:[StoreFirstGuard]},
    {path: 'transports', component: TransportsComponent, canActivate:[StoreFirstGuard]},
    {path: 'booknow', component: BooknowComponent, canActivate:[StoreFirstGuard]},
    {path: 'login', component: LoginComponent, canActivate:[StoreFirstGuard]},
    {path: 'signup', component: SignupComponent, canActivate:[StoreFirstGuard]},
    {path: 'contact', component: ContactComponent, canActivate:[StoreFirstGuard]},
    {path: 'aboutus', component: AboutusComponent, canActivate:[StoreFirstGuard]},
    {path: 'cart', component: CartComponent, canActivate:[StoreFirstGuard]},
    {path: 'confirmation', component: PaymentComponent, canActivate:[StoreFirstGuard]},
    {path: 'tours', component: PackagesComponent, canActivate:[StoreFirstGuard]},
    {path: 'payhere', component: PayforbookComponent,canActivate:[StoreFirstGuard]},
  ]
  },
  { path: 'dhrubo/user', component: UserComponent, canActivate:[StoreFirstGuard],
    children: [
      { path: 'customerbookings', component: UserDetailsComponent},
      { path: 'editprofile', component: EditProfileComponent},
      { path: 'fpage', component: FrontPageComponent},
      { path: 'report', component: OrderReportComponent},

    ]
},
  { path: 'dhrubo/agent', component: AgentSidebarComponent, canActivate:[StoreFirstGuard]},
  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard]
})
export class AppRoutingModule {}