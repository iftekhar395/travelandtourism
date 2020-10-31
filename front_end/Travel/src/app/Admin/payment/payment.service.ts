import { Injectable } from '@angular/core';
import { Payment } from './payment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CustomerService } from '../customer/customer.service';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
};
@Injectable()
export class PaymentService {
  private baseUrl = 'http://localhost:8080/traveltourism/api/v1/payment';


  constructor(private http: HttpClient,
    public cusService: CustomerService) {}

  payment: Payment = {
    payid: null,
    custid: this.cusService.userRole1[0][1].custid,
    bookingid: null,
    paydate: new Date(),
    amount: null,
    paytype: '',
    status: 'Paid'

  };
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAllPayment(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.baseUrl, headerOption);
  }

  createPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.baseUrl, payment, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  updatePayment(payment: Payment): Observable<Payment> {
    return this.http
      .put<Payment>(this.baseUrl + '/' + payment.payid, payment)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  deletePayment(payid: number): Observable<Payment> {
    return this.http.delete<Payment>(this.baseUrl + '/' + payid);
  }

  getPaymentById(payid: number): Observable<Payment> {
    return this.http.get<Payment>(this.baseUrl + '/' + payid, headerOption);
  }
}
