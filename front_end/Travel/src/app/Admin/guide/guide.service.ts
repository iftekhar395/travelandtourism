import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Guide } from './guideinfo/guide';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
};

@Injectable()
export class GuideService {
  private baseUrl = 'http://localhost:8080/traveltourism/api/v1/guide';

  currentGuide: Guide = {
    gid: null,
    name: '',
    mobile: '',
    email: '',
    address: ''
  };

  constructor(private http: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAllGuide(): Observable<Guide[]> {
    return this.http.get<Guide[]>(this.baseUrl, headerOption);
  }

  createGuide(guide: Guide): Observable<Guide> {
    return this.http.post<Guide>(this.baseUrl, guide, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  updateGuide(guide: Guide): Observable<Guide> {
    return this.http
      .put<Guide>(this.baseUrl + '/' + guide.gid, guide)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  deleteGuide(gid: number): Observable<Guide> {
    return this.http.delete<Guide>(this.baseUrl + '/' + gid);
  }

  getGuideById(gid: number): Observable<Guide> {
    return this.http.get<Guide>(this.baseUrl + '/' + gid, headerOption);
  }
}
