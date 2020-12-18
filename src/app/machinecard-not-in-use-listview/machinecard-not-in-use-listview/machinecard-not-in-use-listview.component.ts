import { Component, OnInit } from '@angular/core';
import {Cardmodel} from '../../cardmodel';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-machinecard-not-in-use-listview',
  templateUrl: './machinecard-not-in-use-listview.component.html',
  styleUrls: ['./machinecard-not-in-use-listview.component.css']
})
export class MachinecardNotInUseListviewComponent implements OnInit {

  headers = ['Key', 'Value'];

  public loadedCards: Cardmodel[] = [];

  constructor(private httpCardsNotInUse: HttpClient) {
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
}
