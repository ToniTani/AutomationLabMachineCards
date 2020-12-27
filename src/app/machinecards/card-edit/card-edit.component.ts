import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CardService} from '../card.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  id: number;
  editMode = false;
  cardForm: FormGroup;


  constructor(private route: ActivatedRoute, private cardService: CardService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  onSubmit() {
    // const newQuestion =  new Question(
    //   this.questionForm['name'], this.questionForm['description']);

    if (this.editMode) {
      this.cardService.updateCard(this.id, this.cardForm.value);
    } else {
      this.cardService.addCard(this.cardForm.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm() {
    let questionName = '';
    let questionDescription = '';


    if (this.editMode) {
      const machinecard = this.cardService.getCard(this.id);
      questionName = machinecard.deviceCode;
      questionDescription = machinecard.deviceName;
    }


    {
      this.cardForm = new FormGroup({
        'name': new FormControl(questionName, Validators.required),
        'description': new FormControl(questionDescription, Validators.required)
      });
    }
  }
}
