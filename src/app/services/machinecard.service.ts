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

  getMachinecardById(id): Observable<Cardmodel> {
    return this.machinecardHttpService.getById(id);
  }

  createMachinecard(contact): Observable<Cardmodel> {
    return this.machinecardHttpService.post(contact);
  }

  updateMachinecard(contact): Observable<Cardmodel> {
    return this.machinecardHttpService.put(contact);
  }
}
