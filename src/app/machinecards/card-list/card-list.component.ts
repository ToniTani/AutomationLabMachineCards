import { Component, OnInit } from '@angular/core';
import {Cardmodel} from '../../cardmodel';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  machinecards: Cardmodel[] = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
