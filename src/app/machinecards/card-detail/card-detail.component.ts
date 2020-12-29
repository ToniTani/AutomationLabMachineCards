import {Component, Input, OnInit} from '@angular/core';
import {Cardmodel} from '../../cardmodel';
import {CardService} from '../card.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

 machinecard: Cardmodel;
 id; number;

  constructor(private cardService: CardService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.machinecard = this.cardService.getCard(this.id);
        }
    );
  }
  onEditQuestion() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteQuestion() {
    this.cardService.deleteCard(this.id);
    this.router.navigate(['/machinecards']);
  }
}
