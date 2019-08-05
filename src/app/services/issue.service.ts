import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../models/Issue';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient) { }
   requestHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  .append('Accept','application/vnd.github.machine-man-preview+json');
  getIssues() : Observable<Issue[]> {
    let queryDate = moment().subtract(7,'days').format('yyyy-mm-dd');
    let params = new HttpParams().append('since',queryDate).append('per_page','100');
    
    return this.http.get<Issue[]>('https://api.github.com/repos/angular/angular/issues?q=since:' + queryDate + '&per_page=100', { headers: this.requestHeaders});
  }
}
