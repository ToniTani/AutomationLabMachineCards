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
    let deviceCode = '';
    let versio = '';
    let deviceName = '';
    let bootUp = '';
    let article = '';
    let mac = '';


    if (this.editMode) {
      const machinecard = this.cardService.getCard(this.id);
      deviceCode = machinecard.deviceCode;
      versio = machinecard.versio;
      deviceName = machinecard.deviceName;
      bootUp = machinecard.bootUp;
      article = machinecard.article;
      mac = machinecard.mac;
    }


    {
      this.cardForm = new FormGroup({
        'deviceCode': new FormControl(deviceCode, Validators.required),
        'versio': new FormControl(versio, Validators.required),
        'deviceName': new FormControl(deviceName, Validators.required),
        'bootUp': new FormControl(bootUp, Validators.required),
        'article': new FormControl(article, Validators.required),
        'mac': new FormControl(mac, Validators.required),
      });
    }
  }
}
