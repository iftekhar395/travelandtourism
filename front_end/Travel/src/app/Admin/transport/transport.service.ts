import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Transport } from './transport';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
  header: new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:4200'})
};

@Injectable()
export class TransportService {

  private baseUrl = 'http://localhost:8080/traveltourism/api/v1/transport'; 
  private baseUrl1 = 'http://localhost:8080/traveltourism/api/v1/rentbus';
  private baseUrl2 = 'http://localhost:8080/traveltourism/api/v1/rentcar';
  private baseUrl3 = 'http://localhost:8080/traveltourism/api/v1/transport/limitedtransport';
  
  currentTransport: Transport = {
    transdetid: null,
    tagentid: null,
    tpackid: null,
    transtype: '',
    transdetails: 'Car Model: '+'\n'+'Capacity : \n'+'Engine Size : \n'+'Type: ',
    image: '',
  };

  constructor(private http: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAllTransport(): Observable<Transport[]> {
    return this.http.get<Transport[]>(this.baseUrl, headerOption);
  }
  getLimitedTransport(): Observable<Transport[]> {
    return this.http.get<Transport[]>(this.baseUrl3, headerOption);
  }

  getAllBus(): Observable<Transport[]> {
    return this.http.get<Transport[]>(this.baseUrl1, headerOption);
  }

  getAllCar(): Observable<Transport[]> {
    return this.http.get<Transport[]>(this.baseUrl2, headerOption);
  }

  createTransport(transport: Transport): Observable<Transport> {
    return this.http.post<Transport>(this.baseUrl, transport, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  updateTransport(transport: Transport): Observable<Transport> {
    return this.http
      .put<Transport>(this.baseUrl + '/' + transport.transdetid, transport)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  deleteTransport(transdetid: number): Observable<Transport> {
    return this.http.delete<Transport>(this.baseUrl + '/' + transdetid);
  }

  getTransportById(transdetid: number): Observable<Transport> {
    return this.http.get<Transport>(this.baseUrl + '/' + transdetid, headerOption);
  }
}
