import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CardService} from './card.service';
import {Cardmodel} from '../cardmodel';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private cardService: CardService) {}

  storeCards() {
    const machinecards = this.cardService.getCards();
    this.http.put('https://automation-laboratory-backend.azurewebsites.net/api/device', machinecards)
      .subscribe(response => {
        console.log(response);
      });
  }
  loadCards() {
    return this.http
      .get<Cardmodel[]>(
        'https://automation-laboratory-backend.azurewebsites.net/api/device').pipe(map (machinecards => {
          return machinecards.map(machinecard => {
            return {...machinecard};
          });
        }),
        tap(machinecards => {this.cardService.setCards(machinecards);
        })
      );
  }
}

