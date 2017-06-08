/**
 * Created by Amila on 4/26/2017.
 */
import { Component, OnInit } from '@angular/core';
import { CrService } from '../_services';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {
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
  }

  loadInfo(value: any) {
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
