/**
 * Created by Amila on 4/26/2017.
 */
import { Component, OnInit } from '@angular/core';
import {CrService} from '../_services';

@Component({
  selector: 'app-informant',
  templateUrl: './informant.component.html',
  styleUrls: ['./informant.component.css']
})
export class InformantComponent implements OnInit {
  officers: any;
  selectedOfficer: any;
  selectedOfficerInfo: any;
  
  constructor(private service: CrService) {
    this.officers = null;
    this.selectedOfficerInfo = null;
  }

  ngOnInit() {
    this.service.loadOfficersIds()
      .subscribe((data) => {
        this.officers = data.data;
      });

      this.selectedOfficer = null;
  }

  loadInfo(value:any) {
    this.service.loadOfficerInfo(value)
      .subscribe((data) => {
        if (data) {
          this.selectedOfficerInfo = {
            name: data.username,
            designation: data.designation
          };
        }
      });
  }
}
