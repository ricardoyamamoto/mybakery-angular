import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ConversionTableService } from '../services/conversion-table.service';
import { UnitService } from '../services/unit.service';

import { Ingredient } from '../models/ingredient';
import { Observable} from 'rxjs/Observable';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConversionTableDatabase, ConversionTableDataSource } from './conversion-table.datasource';

import { Unit } from '../models/unit';

import { CustomValidators } from 'ng2-validation';
import {ConversionJSON, ConversionRecord} from '../models/conversion-table';
import {ActivatedRoute, Router} from '@angular/router';
import {IngredientService} from '../services/ingredient.service';

@Component({
  selector: 'app-conversion-table',
  templateUrl: './conversion-table.component.html',
  styleUrls: [ './conversion-table.component.css' ]
})

export class ConversionTableComponent implements OnInit {

  conversionTableForm = new FormGroup({
    _id : new FormControl(),
    ingredientFormControl : new FormControl(),
    quantityFormControl : new FormControl(),
    unitFormControl : new FormControl()
  });

  /** Variables used to store the **/
  units: Array<Unit>;

  /** The following variables store the values provided by the user to inser the recipe ingredient **/
  _id: string;
  @Input() quantity: number;
  @Input() unit: Unit;
  ingredient: Ingredient;
  @Input() conversionRecords: ConversionRecord[];

  conversionTableDatabase: ConversionTableDatabase;

  dataSource: ConversionTableDataSource | null;

  displayedColumns = ['unit', 'quantity', 'defaultUnit', 'edit'];

  constructor(
    private conversionTableService: ConversionTableService,
    private unitService: UnitService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ingredientService: IngredientService) {
    this.createForm();
  }

  createForm() {
    this.conversionTableForm.reset();
    this._id = null;
    this.quantity = null;
    this.unit = null;
    this.conversionTableForm = this.fb.group({
      _id: '',
      quantityFormControl: ['', [Validators.required, CustomValidators.gt(0)]],
      unitFormControl: ['', Validators.required]
    });
  }


  ngOnInit() {

    this.unitService.readAll().subscribe(units => {
      this.units = units;
    });
    this.rebindTable();

  }

  rebindTable(): void {
    this.conversionTableDatabase = new ConversionTableDatabase();
    this.ingredientService.findById(this.route.snapshot.params['id']).subscribe(ingredient => {
      this.ingredient = ingredient;
      this.conversionTableService.find(this.ingredient._id).subscribe(conversionRecords => {
        this.conversionRecords = conversionRecords;
        for (let i = 0; i < this.conversionRecords.length; i++) {
          this.conversionTableDatabase.displayConversion(
            new ConversionRecord(
              conversionRecords[i]._id,
              conversionRecords[i].ingredient,
              conversionRecords[i].unit,
              conversionRecords[i].quantity
            )
          );
        }
      });
    });
    this.dataSource = new ConversionTableDataSource(this.conversionTableDatabase);
  }

  /** Adds a new ingredient to the recipe or updates existing one **/
  saveConversion(): void {
    const conversionRecord = new ConversionJSON(
      this.ingredient._id,
      this.unit._id,
      this.quantity
    );

    if (this._id) {
      this.conversionTableService.updateConversion(this._id, conversionRecord)
        .subscribe(updatedConversion => {
          this.rebindTable();
        });
    } else {
      this.conversionTableService.addConversion(conversionRecord)
        .subscribe(addedConversion => {
            this.rebindTable();
          }
        );
    }

    /** clear the fields after adding a new ingredient **/
    this.createForm();

  }

  /** Allows user to edit a selected ingredient**/
  editConversion(conversionRecord: ConversionRecord) {
    this._id = conversionRecord._id;
    this.quantity = conversionRecord.quantity;
    this.unit = this.filterUnit(conversionRecord.unit._id);
  }

  filterUnit(_id: string): Unit {
    return this.units.find(item => item._id === _id);
  }


  /** Removes ingredient from the recipe **/
  /*removeConversion(conversionRecord: ConversionRecord): void {
    this.conversionTableDatabase.deleteConversion(conversionRecord);
    this.notify.emit(this.conversionTableDatabase.data);
  }*/

}



