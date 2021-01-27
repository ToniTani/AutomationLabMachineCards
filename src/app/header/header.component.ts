import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HeaderOptions} from './header-options';
import {HeaderService} from '../services/header.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options: HeaderOptions;

  isAuthenticated = false;
  loggedInUser: string;
  isLoggedIn: boolean;

  constructor(private router: Router, private header: HeaderService, private authService: AuthService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.userSub();
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
  onLogout(){
    this.authService.logout();
  }
  userSub(){
      this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user); {
        if (user) {
          this.isLoggedIn = true;
          this.loggedInUser = user.email;
        }else{
          this.isLoggedIn = false;
        }
      }
    });
  }
}
