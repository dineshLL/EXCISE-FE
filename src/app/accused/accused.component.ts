/**
 * Created by Amila on 4/26/2017.
 */
import { Component} from '@angular/core';

import Accused from  '../_models/accused';

@Component({
  selector: 'app-accused',
  templateUrl: './accused.component.html',
  styleUrls: ['./accused.component.css']
})
export class AccusedComponent {

  modal: Accused = new Accused();
  status: any;
  trialDate: any;

  constructor() {
    this.status = null;
    this.trialDate = null;
  }
}
