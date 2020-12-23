import { Component, OnInit } from '@angular/core';
import {Cardmodel} from '../cardmodel';

@Component({
  selector: 'app-machinecards',
  templateUrl: './machinecards.component.html',
  styleUrls: ['./machinecards.component.css']
})
export class MachinecardsComponent implements OnInit {

  selectedCard: Cardmodel;

  constructor() { }

  ngOnInit(): void {
  }

}
