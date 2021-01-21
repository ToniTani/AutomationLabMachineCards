import { Injectable } from '@angular/core';
import {Cardmodel} from '../cardmodel';
import {MachinecardHttpService} from './machinecard-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachinecardService {

  constructor(private machinecardHttpService: MachinecardHttpService) {
  }

  get(): Observable<Cardmodel[]> {
    return this.machinecardHttpService.get();
  }

  getMachinecardById(id): Observable<Cardmodel> {
    return this.machinecardHttpService.getById(id);
  }

  createMachinecard(machinecard): Observable<Cardmodel> {
    return this.machinecardHttpService.post(machinecard);
  }

  updateMachinecard(machinecard): Observable<Cardmodel> {
    return this.machinecardHttpService.put(machinecard);
  }

  deleteMachinecard(idNumber: number): Observable<any> {
    return this.machinecardHttpService.delete(idNumber);
  }

  setIsActiveFalseService(idNumber: number): Observable<any> {
    return this.machinecardHttpService.setIsActiveFalseHttpService(idNumber);
  }

  setIsActiveTrueService(idNumber: number): Observable<any> {
    return this.machinecardHttpService.setIsActiveTrueHttpService(idNumber);
  }
}
