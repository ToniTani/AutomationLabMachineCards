import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HeaderOptions} from './header-options';
import {HeaderService} from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options: HeaderOptions;

  constructor(private router: Router, private header: HeaderService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.header.getHeaderOptions().subscribe((options: HeaderOptions) => {
      this.options = options;
    });
  }

  // tslint:disable-next-line:typedef
  onNavigateBack() {
    this.router.navigate(['/Machinecards']);
  }

  // tslint:disable-next-line:typedef
  createNewMachineCard() {
    this.router.navigate(['/Machinecards/new']);
  }
}
