import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Booknow } from './booknow';
import { tap } from 'rxjs/operators';
import { Cart } from '../cart/cart';
import { CartLine } from '../cart/cartLine';
import { Bookhotel } from './bookhotel';
import { ShowBooking } from './showbooking';
import { Duration } from './duration';
import { Bookhotl } from './bookhotl';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
  header: new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:4200'})
};
@Injectable()
export class BooknowService {
  public cartLine: CartLine;
  private baseUrl = 'http://localhost:8080/traveltourism/api/v1/customerbooking';
  private baseUrl1 = 'http://localhost:8080/traveltourism/api/v1/hotelbooking';
  private baseUrl2 = 'http://localhost:8080/traveltourism/api/v1/allhotelbooking';
  private baseUrl3 = 'http://localhost:8080/traveltourism/api/v1/customerbooking/showall';
  private baseUrl4 = 'http://localhost:8080/traveltourism/api/v1/singlehotel';
  private baseUrl5 = 'http://localhost:8080/traveltourism/api/v1/singlepack';
  private baseUrl6 = 'http://localhost:8080/traveltourism/api/v1/singletransport';
  private baseUrl7 = 'http://localhost:8080/traveltourism/api/v1/individualhotelbooking';
  private baseUrl8 = 'http://localhost:8080/traveltourism/api/v1/individualbooking';
  duration: Duration ={
    tourstart: '',
    tourend: ''
  };

  bnow: Booknow = {
    bookingid: null,
    custid: null,
    tpackid: 0,
    tourstart: '',
    tourend: '',
    totalperson: null,
    bookingdate: new Date()
  };

  bookNow: Booknow[] = [];
  bookNowPack: Booknow[] = [];
  bookNowTrans: Booknow[] = [];
  hotelBook: Bookhotel[] = [];
  allhotelbooking: Object[] = [];
  singleHotelBook: Object[] = [];
  showAll: ShowBooking[] = [];

  bhotel: Bookhotel = {
    bookingid: null,
    hdetid: null,
    totalroom: null,
    subtotal: null,
    busid: 0,
    paystatus: "Pending",
  }
  bookh: Bookhotl = {
    bookingid: null,
    hdetid: null,
    totalroom: null,
    subtotal: null,
    busid: 0,
    paystatus: "Pending",
  }
  bohotel: Bookhotel = {
    bookingid: null,
    hdetid: null,
    totalroom: null,
    subtotal: null,
    busid: 0,
    paystatus: "Paid",
  }

  constructor(private http: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAllBookings(): Observable<Booknow[]> {
    return this.http.get<Booknow[]>(this.baseUrl, headerOption);
  }

  showAllBookings(): Observable<ShowBooking[]> {
    return this.http.get<ShowBooking[]>(this.baseUrl3, headerOption);
  }

  createBooking(bnow: Booknow): Observable<Booknow> {
    return this.http.post<Booknow>(this.baseUrl, bnow, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }


  createHotelBooking(bhotel: Bookhotel): Observable<Bookhotel> {
    return this.http.post<Bookhotel>(this.baseUrl1, bhotel, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  updateBooking(pack: Booknow): Observable<Booknow> {
    return this.http
      .put<Booknow>(this.baseUrl + '/' + pack.bookingid, pack)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }
  
  updatePayment(bid: Bookhotel): Observable<Bookhotel> {
    return this.http
      .put<Bookhotel>(this.baseUrl1 + '/' + bid.bookingid, bid)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  deleteBooking(bookingid: number): Observable<Booknow> {
    return this.http.delete<Booknow>(this.baseUrl + '/' + bookingid);
  }

  getBookingById(bookingid: number): Observable<Booknow> {
    return this.http.get<Booknow>(this.baseUrl + '/' + bookingid, headerOption);
  }

  
  getIndividualBookingById(bookingid: number): Observable<Bookhotl> {
    return this.http.get<Bookhotl>(this.baseUrl1 + '/' + bookingid, headerOption);
  }

  getAllHotelBooking(custid: number, bdate: Date): Observable<Object[]> {
    // console.log(this.getAllBookings);
    return this.http.get<Object[]>(this.baseUrl2 + '/' + custid + '/' + bdate, headerOption);
  }
  getIndividualBookings(custid: number): Observable<Object> {
    return this.http.get<Object>(this.baseUrl7 + '/' + custid , headerOption);
  }
  getInBookingById(custid: number): Observable<Object> {
    return this.http.get<Object>(this.baseUrl8 + '/' + custid , headerOption);
  }

  getHotelBookById(hdetid: number, custid: number): Observable<Object> {
    return this.http.get<Object>(this.baseUrl4 + '/' + hdetid + '/' + custid, headerOption);
  }
  
  getPackBookById(tpackid: number, custid: number): Observable<Object> {
    return this.http.get<Object>(this.baseUrl5 + '/' + tpackid + '/' + custid, headerOption);
  }
  
  getTransportBookById(busid: number, custid: number): Observable<Object> {
    return this.http.get<Object>(this.baseUrl6 + '/' + busid + '/' + custid, headerOption);
  }
}
