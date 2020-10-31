import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, Subject } from 'rxjs';
import { Customer } from './customer';
import { tap } from 'rxjs/operators';
import { Customeruser } from './CustomerUser';
import { Userrole } from './Userrole';
import { Customerusr } from './CustomerUsr';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
  header: new HttpHeaders({'Access-Control-Allow-Origin': '*'})
};

@Injectable()
export class CustomerService {
  private baseUrl = 'http://localhost:8080/traveltourism/api/v1/customerinfo';
  private baseUrl2 = 'http://localhost:8080/traveltourism/api/v1/userrole';
  private baseUrl3 = 'http://localhost:8080/traveltourism/api/v1/alluser';
  private baseUrl4 = 'http://localhost:8080/traveltourism/api/v1/customer';

  currentUser: Object[];
  // userRle: Customerusr = {
  //   custid: null,
  //   custname: '',
  //   custphone: '',
  //   custaddress: '',
  //   email: '',
  //   password:'',
  //   role: '',
  //   status: '',
  // }
  customerUser: Customeruser = {
    custid: null,
    custname: '',
    custphone: '',
    custaddress: '',
    email: '',
    password:'',
    role: '',
    status: '',
    image: ''
  }
  currentCustomer: Customer = {
    custid: null,
    custname: '',
    custphone: '',
    email: '',
    custaddress: '',
    image: ''
  };
  userRole1: Customerusr[]=[];
  userRole: Userrole={
    emailid: '',
    password: '',
    status: 'Active',
    role: 'Customer'
  }
  constructor(private http: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl, headerOption);
  }
  getAllUser(): Observable<Userrole[]> {
    return this.http.get<Userrole[]>(this.baseUrl, headerOption);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, customer, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http
      .put<Customer>(this.baseUrl + '/' + customer.custid, customer, headerOption)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  deleteCustomer(custid: number): Observable<Customer> {
    return this.http.delete<Customer>(this.baseUrl + '/' + custid, headerOption);
  }

  getUser(emailid: string, password: string): Observable<Customerusr[]> {
    return this.http.get<Customerusr[]>(this.baseUrl2 + '/' + emailid + '/' + password, headerOption);
  }

  getCustomerById(custid: number): Observable<Object> {
    return this.http.get<object>(this.baseUrl + '/' + custid, headerOption);
  }

  getUserById(custid: number): Observable<Object> {
    return this.http.get<object>(this.baseUrl4 + '/' + custid, headerOption);
  }
  
  createUserRole(user: Userrole): Observable<Userrole> {
    return this.http.post<Userrole>(this.baseUrl2, user, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  updateUserRole(user: Userrole): Observable<Userrole> {
    return this.http
      .put<Userrole>(this.baseUrl2 + '/' + user.emailid + '/', user, headerOption)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  deleteUserRole(emailid: string): Observable<Userrole> {
    return this.http.delete<Userrole>(this.baseUrl2 + '/' + emailid + '/', headerOption);
  }


  getAllUserCustomer(): Observable<Object> {
    return this.http.get<Object>(this.baseUrl3, headerOption);
  }
}
