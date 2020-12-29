import { Component, OnInit } from '@angular/core';
import {Cardmodel} from '../../cardmodel';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MachinecardService} from '../../services/machinecard.service';

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
              private machinecardService: MachinecardService, public snackBar: MatSnackBar) {
    this.machinecard = new Cardmodel();
    this.editingEnabled = false;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.machinecardId = this.route.snapshot.params.id;
    console.log(this.machinecardId);

    if (isNaN(this.machinecardId)) {
      this.editingEnabled = true;
    } else {
      this.machinecardService.getMachinecardById(this.machinecardId).subscribe(response => {
        this.machinecard = response;
      });
    }
  }

  // tslint:disable-next-line:typedef
  onSave() {
    console.log('Save:' + this.machinecardId);
    if (isNaN(this.machinecardId)) {
      this.machinecardService.createMachinecard(this.machinecard).subscribe(response => {
        console.log(response);
        this.router.navigate(['/Machinecards']);
        this.snackBar.open('Machinecard created', 'OK', {duration: 3000});
      });
    } else {
      this.machinecardService.updateMachinecard(this.machinecard).subscribe(response => {
        this.machinecard = response;
        this.editingEnabled = false;
        this.snackBar.open('Machinecard modified', 'OK', {duration: 3000});
      });
    }
  }
}
