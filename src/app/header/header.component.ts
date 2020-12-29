import { Component, OnInit } from '@angular/core';
import {MachinecardService} from '../services/machinecard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private contactService: MachinecardService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createNewMachineCard() {
    this.router.navigate(['/Machinecards/new']);
  }
}
