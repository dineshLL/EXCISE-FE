/**
 * Created by Amila on 4/26/2017.
 */
import { Component, OnInit } from '@angular/core';
import { CrService } from '../_services';

import DetectedItem from '../_models/detectedItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  modal: DetectedItem = new DetectedItem();
  itemList: any;
  subItems: any;
  subItemUnit: any;

  constructor(private service: CrService) {
    this.itemList = null;
    this.subItems = null;
    this.subItemUnit = null;
  }

  ngOnInit() {
    this.service.loadItems()
      .subscribe((data) => {
        if (data.length !== 0) {
          this.itemList = data.data;
        }
      });
  }

  loadSubInfo(value: any) {
    this.service.loadSubItems(value)
      .subscribe((data) => {
        if (data.length !== 0) {
          this.subItems = data.data;
        }
      });
  }

  selectUnit(value: any) {

    console.log(value);
    const scope = this;
    this.subItems.forEach(function (item: any) {
      if (item.subItemCode === value) {
        scope.modal.amount.unit = item.unit;
      }
    });
  }
}
