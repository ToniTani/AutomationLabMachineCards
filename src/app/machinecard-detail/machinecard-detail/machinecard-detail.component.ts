import { Component, OnInit } from '@angular/core';
import {Cardmodel} from '../../cardmodel';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MachinecardService} from '../../services/machinecard.service';
import {HeaderOptions} from '../../header/header-options';
import {HeaderService} from '../../services/header.service';
import {HeaderAction} from '../../header/header-action';

@Component({
  selector: 'app-machinecard-detail',
  templateUrl: './machinecard-detail.component.html',
  styleUrls: ['./machinecard-detail.component.css']
})
export class MachinecardDetailComponent implements OnInit {
  machinecard: Cardmodel;
  machinecardId: number;
  editingEnabled: boolean;

  constructor(private router: Router, private  route: ActivatedRoute,
              private machinecardService: MachinecardService, public snackBar: MatSnackBar, private header: HeaderService) {
    this.machinecard = new Cardmodel();
    this.editingEnabled = false;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.machinecardId = this.route.snapshot.params.id;
    console.log(this.machinecardId);
    let headerAction: HeaderAction[];

    if (isNaN(this.machinecardId)) {
      this.editingEnabled = true;
      headerAction = [];
    } else {
      headerAction = [new HeaderAction(this.onEdit.bind(this), 'edit')];
      this.machinecardService.getMachinecardById(this.machinecardId).subscribe(response => {
        this.machinecard = response;
      });
    }
    this.header.setToolbarOptions(new HeaderOptions(true, headerAction));
  }

  // tslint:disable-next-line:typedef
  onEdit() {
    let headerAction: HeaderAction[];
    this.editingEnabled = !this.editingEnabled;
    if (this.editingEnabled === true) {
      headerAction = [
        new HeaderAction(this.onEdit.bind(this), 'edit')
      ];
    } else {
      headerAction = [new HeaderAction(this.onEdit.bind(this), 'edit')];
    }
    this.header.setToolbarOptions(new HeaderOptions(true, headerAction));
  }

  // tslint:disable-next-line:typedef
  onDelete() {
    this.editingEnabled = false;
    this.machinecardService.deleteMachinecard(this.machinecard).subscribe(() => {
      this.router.navigate(['/Machinecards']);
      this.snackBar.open('Konekortti poistettu', 'OK', {duration: 3000});
    });
  }

  // tslint:disable-next-line:typedef
  onSave() {
    console.log('Save:' + this.machinecardId);
    if (isNaN(this.machinecardId)) {
      this.machinecardService.createMachinecard(this.machinecard).subscribe(response => {
        console.log(response);
        this.router.navigate(['/Machinecards']);
        this.snackBar.open('Konekortti luotu', 'OK', {duration: 3000});
      });
    } else {
      this.machinecardService.updateMachinecard(this.machinecard).subscribe(response => {
        this.machinecard = response;
        this.editingEnabled = false;
        this.router.navigate(['/Machinecards']);
        this.snackBar.open('Konekortti muokattu', 'OK', {duration: 3000});
      });
    }
  }

  // tslint:disable-next-line:typedef
  deleteMachinecard() {
    this.machinecardService.deleteMachinecard(this.machinecard).subscribe(() => {
      this.router.navigate(['/Machinecards']);
      this.snackBar.open('Konekortti poistettu', 'OK', {duration: 3000});
    });
  }
}
