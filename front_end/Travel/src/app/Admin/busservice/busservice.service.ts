import { Injectable } from '@angular/core';
import { Bus } from './busservice';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
  // header: new HttpHeaders({'Access-Control-Allow-Origin': '*'})
};

@Injectable()
export class BusserviceService {
  private baseUrl = 'http://localhost:8080/traveltourism/api/v1/busdetails';
  private baseUrl1 = 'http://localhost:8080/traveltourism/api/v1/busdetail'; 

  allBus: Bus = {
    busid: null,
    busname: '',
    start: '',
    end: '',
    fare: null,
    status: '',
    transdetid: null,
  };

  constructor(private http: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAllBus(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.baseUrl, headerOption);
  }

  getBus(id: number): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.baseUrl1+'/'+id, headerOption);
  }

  createBusDetails(bus: Bus): Observable<Bus> {
    return this.http.post<Bus>(this.baseUrl, bus, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  updateBusDetails(bus: Bus): Observable<Bus> {
    return this.http
      .put<Bus>(this.baseUrl + '/' + bus.busid, bus, headerOption)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  deleteBus(bus: Bus): Observable<Bus> {
    return this.http.delete<Bus>(this.baseUrl + '/' + bus.busid, headerOption);
  }

  getBusById(busid: number): Observable<Bus> {
    return this.http.get<Bus>(this.baseUrl + '/' + busid, headerOption);
  }
}
