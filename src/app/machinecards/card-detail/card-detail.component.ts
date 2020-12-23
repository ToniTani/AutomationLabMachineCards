import {Component, Input, OnInit} from '@angular/core';
import {Cardmodel} from '../../cardmodel';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input() machinecard: Cardmodel
  constructor() { }

  ngOnInit(): void {
  }

}
