import { Observable} from 'rxjs/Observable';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import { RecipeIngredient } from '../models/recipe-ingredient';
import { Ingredient } from '../models/ingredient';

/** An example database that the data source uses to retrieve data for the table. */
export class RecipeIngredientDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<RecipeIngredient[]> = new BehaviorSubject<RecipeIngredient[]>([]);
  get data(): RecipeIngredient[] { return this.dataChange.value; }

  setData(recipeIngredients: RecipeIngredient[]) {
    this.dataChange.next(recipeIngredients);
  }

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
export class RecipeIngredientDataSource extends DataSource<any> {
  constructor(private _recipeIngredientDatabase: RecipeIngredientDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<RecipeIngredient[]> {
    return this._recipeIngredientDatabase.dataChange;
  }

  disconnect() {}
}
