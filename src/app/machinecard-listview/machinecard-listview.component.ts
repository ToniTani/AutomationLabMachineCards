import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cardmodel} from '../cardmodel';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-machinecard-listview',
  templateUrl: './machinecard-listview.component.html',
  styleUrls: ['./machinecard-listview.component.css']
})
export class MachinecardListviewComponent implements OnInit {

  public loadedCards: Cardmodel[] = [];

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.fetchCards();
  }

  // tslint:disable-next-line:typedef
  private fetchCards() {
    this.http
      .get<{ [key: string]: Cardmodel }>(
        'https://automation-laboratory-backend.azurewebsites.net/api/device')
      .pipe(
        map(responseData => {
          const cardsArray: Cardmodel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              cardsArray.push({ ...responseData[key]});
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
