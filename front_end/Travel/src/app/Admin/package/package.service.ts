import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Pack } from './packag';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
  // header: new HttpHeaders({'Access-Control-Allow-Origin': '*'})
};

@Injectable()
export class PackageService {
  private baseUrl = 'http://localhost:8080/traveltourism/api/v1/package';
  private baseUrl1 = 'http://localhost:8080/traveltourism/api/v1/package/limited';

  allPackage: Pack = {
    tpackid: null,
    tpackfrom: '',
    tpackto: '',
    tpackfare: null,
    packagetype: '',
    packageday: '',
    packdesc: '',
    packimg: ''
  };

  constructor(private http: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAllPackage(): Observable<Pack[]> {
    return this.http.get<Pack[]>(this.baseUrl, headerOption);
  }
  getLimitedPackage(): Observable<Pack[]> {
    return this.http.get<Pack[]>(this.baseUrl1, headerOption);
  }

  createPackageDetails(pack: Pack): Observable<Pack> {
    return this.http.post<Pack>(this.baseUrl, pack, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  updatePackageDetails(pack: Pack): Observable<Pack> {
    return this.http
      .put<Pack>(this.baseUrl + '/' + pack.tpackid, pack, headerOption)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  deletePackage(tpackid: number): Observable<Pack> {
    return this.http.delete<Pack>(this.baseUrl + '/' + tpackid, headerOption);
  }

  getPackageById(tpackid: number): Observable<Pack> {
    return this.http.get<Pack>(this.baseUrl + '/' + tpackid, headerOption);
  }
}
