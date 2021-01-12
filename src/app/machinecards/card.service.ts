import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Cardmodel} from '../cardmodel';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cardsChanged = new Subject<Cardmodel[]>();

  private machinecards: Cardmodel[] = [];

  setCards(machinecards: Cardmodel[]) {
    this.machinecards = machinecards;
    this.cardsChanged.next(this.machinecards.slice());
  }

  getCards() {
    return this.machinecards.slice();
  }

  getCard(index: number) {
    return this.machinecards[index];
  }

  addCard(machinecard: Cardmodel) {
    this.machinecards.push(machinecard);
    this.cardsChanged.next(this.machinecards.slice());
  }
  updateCard(index: number, newCard: Cardmodel) {
    this.machinecards[index] = newCard;
    this.cardsChanged.next(this.machinecards.slice());
  }

  deleteCard(index: number) {
    this.machinecards.splice(index, 1);
    this.cardsChanged.next(this.machinecards.slice());
  }

}
