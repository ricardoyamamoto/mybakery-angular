import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { RecipeIngredientService } from '../services/recipe-ingredient.service';
import { UnitService } from '../services/unit.service';

import { Ingredient } from '../models/ingredient';
import { Observable} from 'rxjs/Observable';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RecipeIngredientDatabase, RecipeIngredientDataSource } from './recipe-ingredient.datasource';

import { Unit } from '../models/unit';
import { RecipeIngredient } from '../models/recipe-ingredient';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: [ './recipe-ingredient.component.css' ]
})

export class RecipeIngredientComponent implements OnInit {

  recipeIngredientForm = new FormGroup({
    ingredientFormControl : new FormControl(),
    quantityFormControl : new FormControl(),
    unitFormControl : new FormControl()
  });

  /** Variables used to store the **/
  ingredients: Array<Ingredient>;
  units: Array<Unit>;

  /** The following variables store the values provided by the user to inser the recipe ingredient **/
  @Input() quantity: number;
  @Input() selectedUnit: Unit;
  @Input() selectedIngredient: Ingredient;
  @Input() recipeIngredients: RecipeIngredient[];
  @Output() notify: EventEmitter<RecipeIngredient[]> = new EventEmitter<RecipeIngredient[]>();

  recipeIngredientDatabase = new RecipeIngredientDatabase();

  dataSource: RecipeIngredientDataSource | null;

  displayedColumns = ['ingredientName', 'quantity', 'unit', 'edit', 'delete'];

  constructor(
    private recipeIngredientService: RecipeIngredientService,
    private unitService: UnitService,
    private fb: FormBuilder) {
      this.createForm();
  }

  createForm() {
    this.recipeIngredientForm.reset();
    this.selectedIngredient = null;
    this.quantity = null;
    this.selectedUnit = null;
    this.recipeIngredientForm = this.fb.group({
      ingredientFormControl: ['', Validators.required],
      quantityFormControl: ['', [Validators.required, CustomValidators.gt(0)]],
      unitFormControl: ['', Validators.required]
    });
  }


  ngOnInit() {
    const ingredientsObservable = this.recipeIngredientService.readAll();
    const unitsObservable = this.unitService.readAll();
    Observable.forkJoin([ingredientsObservable, unitsObservable]).subscribe(results => {
      this.ingredients = results[0];
      this.units = results[1];
      if (this.recipeIngredients) {
        this.populateIdFields();
      }
    });
    this.dataSource = new RecipeIngredientDataSource(this.recipeIngredientDatabase);

  }

  populateIdFields(): void {
    for (let i = 0; i < this.recipeIngredients.length; i++) {
      this.selectedIngredient = this.filterIngredient(this.recipeIngredients[i].ingredient._id);
      this.quantity = this.recipeIngredients[i].quantity;
      this.selectedUnit = this.filterUnit(this.recipeIngredients[i].unit._id);
      this.addIngredient();
    }
  }

  filterIngredient(_id: string): Ingredient {
    return this.ingredients.find(item => item._id === _id);
  }

  filterUnit(_id: string): Unit {
    return this.units.find(item => item._id === _id);
  }

  /** Adds a new ingredient to the recipe or updates existing one **/
  addIngredient(): void {
    const recipeIngredient = new RecipeIngredient(
      this.selectedIngredient,
      this.quantity,
      this.selectedUnit
    );

    this.recipeIngredientDatabase.addIngredient(recipeIngredient);

    /** clear the fields after adding a new ingredient **/
    this.createForm();

    this.notify.emit(this.recipeIngredientDatabase.data);
  }

  /** Allows user to edit a selected ingredient**/
  editIngredient(recipeIngredient: RecipeIngredient) {
    this.selectedIngredient = recipeIngredient.ingredient;
    this.quantity = recipeIngredient.quantity;
    this.selectedUnit = recipeIngredient.unit;
    this.notify.emit(this.recipeIngredientDatabase.data);
  }

  /** Removes ingredient from the recipe **/
  removeIngredient(recipeIngredient: RecipeIngredient): void {
    this.recipeIngredientDatabase.deleteIngredient(recipeIngredient);
    this.notify.emit(this.recipeIngredientDatabase.data);
  }

}



