import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Ingredient} from '../ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
})
export class IngredientListComponent implements OnInit {
  @Output() ingredientSelected = new EventEmitter<Ingredient>();
  ingredients: Ingredient[]= [new Ingredient('sugar', 'generic name for sweet, soluble carbohydrates, many of which are used in food', 'gr.'),
  new Ingredient('Black pepper', ' flowering vine in the family Piperaceae, cultivated for its fruit', 'gr')];
  constructor() { }

  ngOnInit() {
  }

  onSelected(ingredient: Ingredient) {
    this.ingredientSelected.emit(ingredient);
  }

}
