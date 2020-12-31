import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Cardmodel} from '../cardmodel';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MachinecardHttpService {
  url: string;

  constructor(private  httpClient: HttpClient) {
    this.url = environment.endpointUrl;
  }

  get(): Observable<Cardmodel[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Cardmodel[];
    }));
  }

  getById(id): Observable<Cardmodel> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Cardmodel;
    }));
  }

  post(machinecard): Observable<Cardmodel> {
    return this.httpClient.post(this.url, machinecard).pipe(map(response => {
      return response as Cardmodel;
    }));
  }

  put(machinecard): Observable<Cardmodel> {
    return this.httpClient.put(this.url + '/' + machinecard.id, machinecard).pipe(map(response => {
      return response as Cardmodel;
    }));
  }
}
