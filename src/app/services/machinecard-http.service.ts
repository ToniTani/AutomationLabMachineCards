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
  setIsActiveValueFalseUrl: string;
  removeMachineCardUrl: string;

  constructor(private  httpClient: HttpClient) {
    this.url = environment.endpointUrl;
    this.removeMachineCardUrl = environment.removeMachineCardUrl;
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

  // The code below will delete a machinecard permanently.
  delete(idNumber: number): Observable<any> {
    return this.httpClient.delete(this.removeMachineCardUrl + '/' + idNumber);
  }

  // The function below does not delete a machinecard. What it does it sets machinecard's isActive value false.
  // In this situation the certain machinecard is not in use.
  setIsActiveFalseHttpService(idNumber: number): Observable<any> {
    return this.httpClient.delete(this.url + '/' + idNumber);
  }

  // The function below will set machinecard's isActive value true.
  // In this situation the certain machinecard is in use.
  setIsActiveTrueHttpService(idNumber: number): Observable<any> {
    // Do not remove the comment below
    // @ts-ignore
    return this.httpClient.patch(this.url + '/' + idNumber);
  }
}
