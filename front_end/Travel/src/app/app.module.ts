import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomerinfoComponent } from './Admin/customer/customerinfo/customerinfo.component';
import { AgentinfoComponent } from './Admin/agent/agentinfo/agentinfo.component';
import { HotelinfoComponent } from './Admin/hotel/hotelinfo/hotelinfo.component';
import { TransportinfoComponent } from './Admin/transport/transportinfo/transportinfo.component';
import { GuideinfoComponent } from './Admin/guide/guideinfo/guideinfo.component';
import { PaymentinfoComponent } from './Admin/payment/paymentinfo/paymentinfo.component';
import { FeedbackinfoComponent } from './Admin/feedback/feedbackinfo/feedbackinfo.component';
import { CustomerModule } from './Admin/customer/customer.module';
import { AgentModule } from './Admin/agent/agent.module';
import { HotelModule } from './Admin/hotel/hotel.module';
import { TransportModule } from './Admin/transport/transport.module';
import { GuideModule } from './Admin/guide/guide.module';
import { PaymentModule } from './Admin/payment/payment.module';
import { FeedbackModule } from './Admin/feedback/feedback.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomepageModule } from './homepage/homepage.module';
import { BsNavbarModule } from './homepage/bs-navbar/bs-navbar.module';
import { BooknowModule} from './homepage/booknow/booknow.module';
import { BsNavbarComponent } from './homepage/bs-navbar/bs-navbar.component';
import { ShowHotelsModule } from './homepage/show-hotels/show-hotels.module';
import { BusserviceModule } from './Admin/busservice/busservice.module';
import { BusserviceInfoComponent } from './Admin/busservice/busservice-info/busservice-info.component';
import { SidebarModule } from './Admin/sidebar/sidebar.module';
import { SignupModule } from './homepage/signup/signup.module';
import { CartModule } from './homepage/cart/cart.module';
import { LoginModule } from './homepage/login/login.module';
import { Cart } from './homepage/cart/cart';
import { Payment1Module } from './homepage/payment/payment1.module';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { PackageModule } from './Admin/package/pack.module';
import { TransportsModule } from './homepage/transports/transports.module';
import { BookingModule } from './Admin/booking/booking.module';
import { BookinginfoComponent } from './Admin/booking/bookinginfo/bookinginfo.component';
import { UserModule } from './user/user/user.module';
import { AgentSidebarModule } from './agent/agent-sidebar/agent-sidebar.module';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { ReportComponent } from './Admin/report/report.component';
import { ReportModule } from './Admin/report/report.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UserbookingsComponent } from './user/user-details/userbookings/userbookings.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { ResortComponent } from './Admin/resort/resort.component';
import { FrontPageComponent } from './user/front-page/front-page.component';
import { OrderReportComponent } from './user/order-report/order-report.component';

@NgModule({
  declarations: [AppComponent, BsNavbarComponent, CustomerinfoComponent, AgentinfoComponent, HotelinfoComponent, TransportinfoComponent, GuideinfoComponent, PaymentinfoComponent, FeedbackinfoComponent, NotfoundComponent, BusserviceInfoComponent, DashboardComponent, BookinginfoComponent, UserDetailsComponent, ReportComponent, UserbookingsComponent, EditProfileComponent, ResortComponent, FrontPageComponent, OrderReportComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomerModule,
    AgentModule,
    HotelModule,
    TransportModule,
    GuideModule,
    PackageModule,
    PaymentModule,
    Payment1Module,
    FeedbackModule,
    BrowserAnimationsModule,
    HomepageModule,
    FormsModule,
    BsNavbarModule,
    BooknowModule,
    RouterModule,
    ShowHotelsModule,
    BusserviceModule,
    SidebarModule,
    SignupModule,
    LoginModule,
    CartModule,
    TransportsModule,
    BookingModule,
    UserModule,
    AgentSidebarModule,
    ReportModule,
    PdfViewerModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    })
  ],
  providers: [Cart],
  bootstrap: [AppComponent]
})
export class AppModule {}
