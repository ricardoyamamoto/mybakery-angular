import { Component, Input, OnInit } from '@angular/core';
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



import { Unit } from '../models/unit';
import { RecipeIngredient } from '../models/recipe-ingredient';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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

  exampleDatabase = new ExampleDatabase();

  dataSource: ExampleDataSource | null;

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
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
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
    this.exampleDatabase.addIngredient(recipeIngredient);

    /** clear the fields after adding a new ingredient **/
    this.selectedIngredient = null;
    this.quantity = null;
    this.selectedUnit = null;
  }

  /** Allows user to edit a selected ingredient**/
  editIngredient(recipeIngredient: RecipeIngredient) {
    this.selectedIngredient = recipeIngredient.ingredient;
    this.quantity = recipeIngredient.quantity;
    this.selectedUnit = recipeIngredient.unit;
  }

  /** Removes ingredient from the recipe **/
  removeIngredient(recipeIngredient: RecipeIngredient): void {
    this.exampleDatabase.deleteIngredient(recipeIngredient);
  }

}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<RecipeIngredient[]> = new BehaviorSubject<RecipeIngredient[]>([]);
  get data(): RecipeIngredient[] { return this.dataChange.value; }

  /** Adds a new recipe ingredient to the in memory database. */
  addIngredient(recipeIngredient: RecipeIngredient) {
    const copiedData = this.data.slice();
    var recipeIndex: number;
    recipeIndex = this.findIngredient(copiedData, recipeIngredient.ingredient);
    if (recipeIndex >= 0) {
      copiedData.splice(recipeIndex, 1);
    }
    copiedData.push(recipeIngredient);
    this.dataChange.next(copiedData);
  }

  /** Checks whether the provided ingredient already exists in the list **/
  findIngredient(data: RecipeIngredient[], ingredient: Ingredient): number {
    let i;
    for (i = 0; i < data.length; i++) {
      if (data[i].ingredient === ingredient) {
        return i;
      }
    }
    return - 1;
  }

  /** Removes a recipe ingredient from the in memory database. **/
  deleteIngredient(recipeIngredient: RecipeIngredient) {
    const copiedData = this.data.slice();
    copiedData.splice(copiedData.indexOf(recipeIngredient), 1);
    this.dataChange.next(copiedData);
  }

}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<RecipeIngredient[]> {
    return this._exampleDatabase.dataChange;
  }

  disconnect() {}
}

