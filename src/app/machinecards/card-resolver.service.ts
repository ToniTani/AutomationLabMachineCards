import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Cardmodel} from '../cardmodel';
import {DataStorageService} from './data-storage.service';
import {CardService} from './card.service';

@Injectable({
  providedIn: 'root'
})
export class CardResolverService implements Resolve<Cardmodel[]> {

  constructor(private dataStorageService: DataStorageService, private cardService: CardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const machinecards = this.cardService.getCards();

    if (machinecards.length === 0) {
      return this.dataStorageService.loadCards();
    } else {
      return machinecards;
    }
  }
}
