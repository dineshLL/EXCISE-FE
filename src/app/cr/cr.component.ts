/**
 * Created by Amila on 4/26/2017.
 */
import { Component, ViewChild } from '@angular/core';
import {OfficerComponent} from '../officer';
import {InformantComponent} from '../informant';
import {ItemComponent} from '../item';
import {AccusedComponent} from '../accused';
import {CrService} from '../_services';

import Cr from "../_models/cr";
import DetectedItem from "../_models/detectedItem";
import Amount from "../_models/amount";
import Accused from "../_models/accused";

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-cr',
  templateUrl: './cr.component.html',
  styleUrls: ['./cr.component.css']
})
export class CrComponent {
  detectionDate: any;
  cr: Cr;

  @ViewChild(OfficerComponent)
  Officer: OfficerComponent;

  @ViewChild(InformantComponent)
  Informant: InformantComponent;

  @ViewChild(ItemComponent)
  Item: ItemComponent;

  @ViewChild(AccusedComponent)
  Accused: AccusedComponent;

  constructor(private service: CrService) {
    
  }

  addCrs() {
    this.cr = new Cr();
    this.cr.detectedDate = this.detectionDate;
    this.cr.detectionOfficer = this.Officer.selectedOfficer;
    this.cr.informant = this.Informant.selectedOfficer;
    this.cr.state = this.Accused.status;

    this.cr.detectedItem = this.Item.modal;
    this.cr.accused = this.Accused.modal;

    this.service.addCr(this.cr)
      .then(result => {
        this.Officer.selectedOfficer = null;
        this.Informant.selectedOfficer = null;
        this.Accused.status = null;

        this.Item.modal = new DetectedItem();
        this.Accused.modal = new Accused();

        this.cr = new Cr();

        alert('saved');

      })
      .catch(err => console.log(err));

  }
}
