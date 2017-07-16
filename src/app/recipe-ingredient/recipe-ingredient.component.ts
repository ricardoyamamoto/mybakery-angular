import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

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
import { FormControl, Validators } from '@angular/forms';

import { RecipeIngredientDatabase, RecipeIngredientDataSource } from './recipe-ingredient.datasource';

import { Unit } from '../models/unit';
import { RecipeIngredient } from '../models/recipe-ingredient';


@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: [ './recipe-ingredient.component.css' ]
})

export class RecipeIngredientComponent implements OnInit {

  /** Variables used to store the **/
  ingredients: Array<Ingredient>;
  units: Array<Unit>;

  /** The following variables store the values provided by the user to inser the recipe ingredient **/
  @Input() quantity: number;
  @Input() selectedUnit: Unit;
  @Input() selectedIngredient: Ingredient;
  @Output() notify: EventEmitter<RecipeIngredient[]> = new EventEmitter<RecipeIngredient[]>();

  recipeIngredientDatabase = new RecipeIngredientDatabase();

  dataSource: RecipeIngredientDataSource | null;

  displayedColumns = ['ingredientName', 'quantity', 'unit', 'edit', 'delete'];

  filteredIngredients: Observable<Ingredient[]>;


  myControl = new FormControl();

  ingredientFormControl = new FormControl('', [
    Validators.required
  ]);

  quantityFormControl = new FormControl('', [
    Validators.required
  ]);

  unitFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private recipeIngredientService: RecipeIngredientService,
    private unitService: UnitService,
    private router: Router) {
  }


  ngOnInit() {
    this.recipeIngredientService.readAll().subscribe(ingredients => {
      this.ingredients = ingredients;
    });

    this.unitService.readAll().subscribe(units => {
      this.units = units;
    });
    this.dataSource = new RecipeIngredientDataSource(this.recipeIngredientDatabase);
    this.filteredIngredients = this.myControl.valueChanges
      .startWith(null)
      .map(ingredient => ingredient  && typeof ingredient === 'object' ? ingredient.name : ingredient)
      .map(name => name ? this.filter(name) : this.ingredients.slice());

  }


  filter(name: string): Ingredient[] {
    return this.ingredients.filter(ingredient => new RegExp(`^${name}`, 'gi').test(ingredient.name));
  }

  displayFn(ingredient: Ingredient): any {
    return ingredient ? ingredient.name : ingredient;
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
    this.selectedIngredient = null;
    this.quantity = null;
    this.selectedUnit = null;

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



