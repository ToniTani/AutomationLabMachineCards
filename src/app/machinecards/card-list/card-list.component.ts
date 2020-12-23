import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cardmodel} from '../../cardmodel';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Output() cardWasSelected = new EventEmitter<Cardmodel>();
  machinecards: Cardmodel[] = [
    new Cardmodel('', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCardSelected(cardmodel: Cardmodel){
  this.cardWasSelected.emit(cardmodel);
  }

}
