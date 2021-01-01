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

    let workplaceId: number;
    let deviceCode = '';
    let versio = '';
    let deviceName = '';
    let bootUp = '';
    let article = '';
    let mac = '';
    let profinetIP = '';
    let subnet = '';
    let routerIP = '';
    let profibus = '';
    let asi = '';
    let mpi = '';
    let counterIn = '';
    let counterOut = '';
    let isActive: boolean;


    if (this.editMode) {
      const machinecard = this.cardService.getCard(this.id);
      workplaceId = machinecard.workplaceId;
      deviceCode = machinecard.deviceCode;
      versio = machinecard.versio;
      deviceName = machinecard.deviceName;
      bootUp = machinecard.bootUp;
      article = machinecard.article;
      mac = machinecard.mac;
      profinetIP = machinecard.profinetIP;
      subnet = machinecard.subnet;
      routerIP = machinecard.routerIP;
      profibus = machinecard.profibus;
      asi = machinecard.asi;
      mpi = machinecard.mpi;
      counterIn = machinecard.counterIn;
      counterOut = machinecard.counterOut;
      isActive = machinecard.isActive;

    }


    {
      this.cardForm = new FormGroup({
        'workplaceId': new FormControl(workplaceId, Validators.required),
        'deviceCode': new FormControl(deviceCode, Validators.required),
        'versio': new FormControl(versio, Validators.required),
        'deviceName': new FormControl(deviceName, Validators.required),
        'bootUp': new FormControl(bootUp, Validators.required),
        'article': new FormControl(article, Validators.required),
        'mac': new FormControl(mac, Validators.required),
        'profinetIP': new FormControl(profinetIP, Validators.required),
        'subnet': new FormControl(subnet, Validators.required),
        'routerIP': new FormControl(routerIP, Validators.required),
        'profibus': new FormControl(profibus, Validators.required),
        'asi': new FormControl(asi, Validators.required),
        'mpi': new FormControl(mpi, Validators.required),
        'counterIn': new FormControl(counterIn, Validators.required),
        'counterOut': new FormControl(counterOut, Validators.required),
        'isActive': new FormControl(isActive, Validators.required)
      });
    }
  }
}
