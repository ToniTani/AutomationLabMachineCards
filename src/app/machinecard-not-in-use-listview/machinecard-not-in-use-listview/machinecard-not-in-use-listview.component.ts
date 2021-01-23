import { Component, OnInit } from '@angular/core';
import {Cardmodel} from '../../cardmodel';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MachinecardService} from '../../services/machinecard.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ConfirmDialogService} from '../../services/confirm-dialog.service';

@Component({
  selector: 'app-machinecard-not-in-use-listview',
  templateUrl: './machinecard-not-in-use-listview.component.html',
  styleUrls: ['./machinecard-not-in-use-listview.component.css']
})
export class MachinecardNotInUseListviewComponent implements OnInit {

  headers = ['Key', 'Value'];

  public loadedCards: Cardmodel[] = [];
  machinecard: Cardmodel;
  isLoading = false;

  constructor(private httpCardsNotInUse: HttpClient, private router: Router,
              private machinecardService: MachinecardService, public snackBar: MatSnackBar,
              private confirmDialogService: ConfirmDialogService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.fetchCardsNotInUse();
  }

  // tslint:disable-next-line:typedef
  private fetchCardsNotInUse() {
    this.isLoading = true;
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
        this.isLoading = false;
      });
  }

  // tslint:disable-next-line:typedef
  editMachinecardButton(idNumber: number) {
    this.isLoading = true;
    this.router.navigate(['/Machinecards/' + idNumber]);
    console.log(idNumber);
  }

  // tslint:disable-next-line:typedef
  setIsActiveValueTrue(idNumber: number) {
    this.machinecardService.setIsActiveTrueService(idNumber).subscribe(() => {
      window.location.reload();
    });
  }

  // This will delete a certain machinecard permanently.
  // tslint:disable-next-line:typedef
  deleteMachinecard(idNumber: number) {
    this.isLoading = true;
    this.machinecardService.deleteMachinecard(idNumber).subscribe(() => {
      window.location.reload();
      this.isLoading = false;
    });
  }

  // tslint:disable-next-line:typedef
  showDialog(idNumber: number) {
    this.confirmDialogService.confirmThis('Haluatko varmasti poistaa konekortin pysyvästi?', () => {
      this.deleteMachinecard(idNumber);
      console.log('Yes clicked. Machinecard has been deleted permanently.');
    }, () => {
      console.log('No clicked. Delete canceled.');
    });
  }
}
