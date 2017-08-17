import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


import { Observable } from 'rxjs/Observable';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ProfitMargin } from '../models/profit-margin';

import { CustomValidators } from 'ng2-validation';

import { ActivatedRoute, Router } from '@angular/router';
import { ProfitMarginService } from '../services/profit-margin';

@Component({
  selector: 'app-profit-margin',
  templateUrl: './profit-margin.component.html',
  styleUrls: ['./profit-margin.component.css'],
  providers: [ProfitMarginService]
})

export class ProfitMarginComponent {


  @Input() myprofitmargin: ProfitMargin = new ProfitMargin();


  constructor(private router: Router, private profitMarginService: ProfitMarginService) { }

  ngOnInit() {

    this.profitMarginService.findById().subscribe(result => {
      this.myprofitmargin.value = result.value;

    });

  }




  saveConfig() {
    // debugger;
var valu=parseInt(this.myprofitmargin.value);
if(valu>0){

    this.profitMarginService.editData(this.myprofitmargin).subscribe(data => console.log(data));

}
else{
  alert("Must be greater than zero");
}
  }




}



