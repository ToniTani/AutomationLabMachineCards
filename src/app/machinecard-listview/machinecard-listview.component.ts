import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cardmodel} from '../cardmodel';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {MachinecardService} from '../services/machinecard.service';
import {HeaderOptions} from '../header/header-options';
import {HeaderService} from '../services/header.service';

@Component({
  selector: 'app-machinecard-listview',
  templateUrl: './machinecard-listview.component.html',
  styleUrls: ['./machinecard-listview.component.css']
})
export class MachinecardListviewComponent implements OnInit {
  headers = ['Key', 'Value'];
  public loadedCards: Cardmodel[] = [];
  machinecard: Cardmodel;
  isLoading = false;

  constructor(private http: HttpClient, private router: Router, private  activatedRoute: ActivatedRoute,
              private machinecardService: MachinecardService, private header: HeaderService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.fetchCards();

    this.machinecardService.get().subscribe(response => {
      this.loadedCards = response;
      console.log(response);
    });
    this.header.setToolbarOptions(new HeaderOptions(false, []));
  }

  // tslint:disable-next-line:typedef
  private fetchCards() {
    this.isLoading = true;
    this.http
      .get<{ [key: string]: Cardmodel }>(
        'https://automation-laboratory-backend.azurewebsites.net/api/device')
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
    this.router.navigate(['/Machinecards/' + idNumber]);
    console.log(idNumber);
  }

  // tslint:disable-next-line:typedef
  setIsActiveValueFalse(idNumber: number) {
    this.machinecardService.setIsActiveFalseService(idNumber).subscribe(() => {
      window.location.reload();
    });
  }
}
