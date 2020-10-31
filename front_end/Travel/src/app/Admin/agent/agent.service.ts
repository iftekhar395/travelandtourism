import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClientModule,
  HttpClient
} from '@angular/common/http';
import { Agent } from './agent';
import { Subject, Observable, ObservableInput } from 'rxjs';
import { tap } from 'rxjs/operators';

const headerOption = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
  // header: new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:4200'})
};
@Injectable()
export class AgentService {
  private baseurl = 'http://localhost:8080/traveltourism/api/v1/hotelagent';

  agent: Agent = {
    hagentid: null,
    hagentname: '',
    hagentmobile: '',
    hagentaddress: '',
    emailid: ''
  };
  constructor(private http: HttpClient) {}
  private refresh = new Subject<void>();

  get refreshData() {
    return this.refresh;
  }

  getAllAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.baseurl, headerOption);
  }

  createAgent(agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(this.baseurl, agent, headerOption).pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  updateAgent(agent: Agent): Observable<Agent> {
    return this.http
      .put<Agent>(this.baseurl + '/' + agent.hagentid, agent, headerOption)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  deleteAgent(agent: Agent): Observable<Agent> {
    return this.http.delete<Agent>(this.baseurl + '/' + agent.hagentid, headerOption);
  }

  getAgentById(hagentid: number): Observable<Agent> {
    return this.http.get<Agent>(this.baseurl + '/' + hagentid, headerOption);
  }
}
