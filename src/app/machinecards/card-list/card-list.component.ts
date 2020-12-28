import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Cardmodel} from '../../cardmodel';
import {Subscription} from 'rxjs';
import {CardService} from '../card.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnDestroy {

  // @Output() cardWasSelected = new EventEmitter<Cardmodel>();
  machinecards: Cardmodel[];
  subscription: Subscription;


  constructor(private cardService: CardService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.cardService.cardsChanged
      .subscribe(
        (machinecards: Cardmodel[]) => {
        this.machinecards = machinecards;
        }
      );
    this.machinecards = this.cardService.getCards(); {
      return this.cardService;
    }
  }
  onNewQuestion() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
