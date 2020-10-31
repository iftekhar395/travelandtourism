import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Hotel } from './hotel';
import { tap } from 'rxjs/operators';
import { Hotel1 } from './hotel-list/hotel1';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
  header: new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:4200'})
}

@Injectable()
export class HotelService {

  private baseUrl = 'http://localhost:8080/traveltourism/api/v1/hoteldetails';
  private baseUrl1 = 'http://localhost:8080/traveltourism/api/v1/hoteldetail';
  private baseUrl2 = 'http://localhost:8080/traveltourism/api/v1/hoteldetails/ltdhotels';
  private baseUrl3 = 'http://localhost:8080/traveltourism/api/v1/hoteldetail/ltdresorts';

  currentHotel: Hotel = {
    hdetid : null,
    hagentid : null,
    roomtype : '',
    rent : null,
    facilities : '',
    type: '',
    imgurl: ''
  }

  hotel: Hotel1[]=[];  
  currentHotel1: Hotel1 = {
    hdetid : null,
    hagentid : null,
    roomtype : '',
    rent : null,
    facilities : '',
    type: '',
    imgurl: ''
  }

  constructor(private http: HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAllHotel(): Observable<Hotel1[]> {
    return this.http.get<Hotel1[]>(this.baseUrl, headerOption);
  }

  getAllResort(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.baseUrl1, headerOption);
  }
  getLtdHotel(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.baseUrl2, headerOption);
  }

  getLtdResort(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.baseUrl3, headerOption);
  }

  createHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.baseUrl, hotel, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  updateHotel(hotel: Hotel1): Observable<Hotel1> {
    return this.http
      .put<Hotel1>(this.baseUrl + '/' + hotel.hdetid, hotel, headerOption)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }
  
  updateResort(hotel: Hotel): Observable<Hotel> {
    return this.http
      .put<Hotel>(this.baseUrl + '/' + hotel.hdetid, hotel, headerOption)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  deleteHotel(hdetid: number): Observable<Hotel1> {
    return this.http.delete<Hotel1>(this.baseUrl + '/' + hdetid, headerOption);
  }
  
  deleteResort(hdetid: number): Observable<Hotel> {
    return this.http.delete<Hotel>(this.baseUrl + '/' + hdetid, headerOption);
  }

  getHotelById(hdetid: number): Observable<Hotel> {
    return this.http.get<Hotel>(this.baseUrl + '/' + hdetid, headerOption);
  }


}
