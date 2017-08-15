import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {IngredientListService} from '../../services/ingredient-list.service';
import {IngredientSearchService} from '../../services/ingredient-search.service';
import {Ingredient} from '../../models/ingredient';
import {IngredientService} from '../../services/ingredient.service';
import {Unit} from '../../models/unit';
import {Recipe} from '../../models/recipe';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
  providers: [IngredientService]
})

export class IngredientListComponent implements OnInit {

  /** Variables used to store the ingredients**/
  @Input() ingredients: Array<Ingredient>;
  @ViewChild('addNewIngredientDialog') public addNewIngredientDialog;
  @ViewChild('editIngredientDialog') public editIngredientDialog;
  @Input() myUnit: Unit = new Unit();
  page = 0;
  @Input() myIngredient: Ingredient = new Ingredient();
  name;
  description;
  unit;
  _id;
  private switch = true;
  private switch2 = false;
  private switch3 = true;
  @Input() units: Unit[];
  @Input() deleteButtonEnabled = false;
  private usedRecipeIngredients: Ingredient[] = new Array<Ingredient>();

  constructor(private ingredientListService: IngredientListService,
              private ingredientSearchService: IngredientSearchService,
              private router: Router,
              private ingredientService: IngredientService) {
  }

  ngOnInit() {
    this.ingredientListService.readAll().subscribe(ingredients => {
      this.ingredients = ingredients;
    });

    this.ingredientService.readUnits().subscribe((data: Unit[]) => {
      this.units = new Array<Unit>();
      this.units = data;
    });

    this.ingredientService.getUsedIngredient().subscribe((data: Recipe[]) => {

      for (let i = 0; i < data.length; i++) {

        for (let j = 0; j < data[i].recipeIngredients.length; j++) {

          this.usedRecipeIngredients.push(data[i].recipeIngredients[j].ingredient);
        }
      }
    });


  }

  showSearchResults(term: string): void {
    if (term !== '') {
      this.ingredients = [];
      this.ingredientSearchService.readSearchedIngredients(term, this.page).subscribe(ingredients => {
        this.ingredients = ingredients;
      });
    }
  }

  resetSearchResults(): void {
    this.ingredients = [];
    this.ngOnInit();
  }

  onSwitch() {
    this.switch = !this.switch;
    this.switch2 = !this.switch2;
  }

  editEnabled(ingredient: Ingredient, myUnit: Unit) {
    this.myIngredient = ingredient;
    this.myUnit = myUnit;

    for (let i = 0; i < this.usedRecipeIngredients.length; i++) {

      if (this.myIngredient._id === this.usedRecipeIngredients[i]._id) {
        console.log(this.myIngredient._id);
        console.log(this.usedRecipeIngredients[i]._id);

        this.deleteButtonEnabled = false;
        break;

      } else {

        this.deleteButtonEnabled = true;
      }

    }
    this.switch2 = !this.switch2;
    this.switch3 = !this.switch3;

  }


}

