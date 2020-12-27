import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Cardmodel} from '../../../cardmodel';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() machinecard: Cardmodel;
  @Input() index: number;

  ngOnInit() {
  }
}
