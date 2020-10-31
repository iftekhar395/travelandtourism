import { Injectable } from '@angular/core';
import { Feedback } from './feedback';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
};

@Injectable()
export class FeedbackService {
  private baseUrl = 'http://localhost:8080/traveltourism/api/v1/feedback';

  currentFeedback: Feedback = {
    fid : null,
    custid : null,
    feedbackfor: '',
    comment: '',
  };

  constructor(private http: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAll(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.baseUrl, headerOption);
  }

  // createCustomer(customer: Customer): Observable<Customer> {
  //   return this.http.post<Customer>(this.baseUrl, customer, headerOption).pipe(
  //     tap(() => {
  //       this._refreshNeeded$.next();
  //     })
  //   );
  // }

  // updateCustomer(customer: Customer): Observable<Customer> {
  //   return this.http
  //     .put<Customer>(this.baseUrl + '/' + customer.custid, customer)
  //     .pipe(
  //       tap(() => {
  //         this._refreshNeeded$.next();
  //       })
  //     );
  // }

  deleteFeedback(fid: number): Observable<Feedback> {
    return this.http.delete<Feedback>(this.baseUrl + '/' + fid);
  }

  getFeedbackById(fid: number): Observable<Feedback> {
    return this.http.get<Feedback>(this.baseUrl + '/' + fid, headerOption);
  }
}
