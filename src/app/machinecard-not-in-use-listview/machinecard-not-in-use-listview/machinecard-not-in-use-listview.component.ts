import { Component, OnInit } from '@angular/core';
import {Cardmodel} from '../../cardmodel';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MachinecardService} from '../../services/machinecard.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-machinecard-not-in-use-listview',
  templateUrl: './machinecard-not-in-use-listview.component.html',
  styleUrls: ['./machinecard-not-in-use-listview.component.css']
})
export class MachinecardNotInUseListviewComponent implements OnInit {

  headers = ['Key', 'Value'];

  public loadedCards: Cardmodel[] = [];
  machinecard: Cardmodel;

  constructor(private httpCardsNotInUse: HttpClient, private router: Router,
              private machinecardService: MachinecardService, public snackBar: MatSnackBar) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.fetchCardsNotInUse();
  }

  // tslint:disable-next-line:typedef
  private fetchCardsNotInUse() {
    this.httpCardsNotInUse
      .get<{ [key: string]: Cardmodel }>(
        'https://automation-laboratory-backend.azurewebsites.net/api/device/DeviceActiveFalse')
      .pipe(
        map(responseData => {
          const cardsArray: Cardmodel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              cardsArray.push({...responseData[key]});
            }
          }
          return cardsArray;
        })
      )
      .subscribe(cards => {
        this.loadedCards = cards;
      });
  }

  // tslint:disable-next-line:typedef
  editMachinecardButton(idNumber: number) {
    this.router.navigate(['/Machinecards/' + idNumber]);
    console.log(idNumber);
  }

  // tslint:disable-next-line:typedef
  setIsActiveValueTrue(idNumber: number) {
    this.machinecardService.setIsActiveTrueService(idNumber).subscribe(() => {
      window.location.reload();
    });
  }

  // tslint:disable-next-line:typedef
  deleteMachinecard(idNumber: number) {
    this.machinecardService.deleteMachinecard(idNumber).subscribe(() => {
      window.location.reload();
    });
  }
}
