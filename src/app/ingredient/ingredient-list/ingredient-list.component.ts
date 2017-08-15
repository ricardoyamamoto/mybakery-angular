import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {IngredientListService} from '../../services/ingredient-list.service';
import {IngredientSearchService} from '../../services/ingredient-search.service';
import {Ingredient} from '../../models/ingredient';
import {IngredientService} from '../../services/ingredient.service';
import {Unit} from '../../models/unit';

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
  page: number = 0;
  @Input() myIngredient: Ingredient = new Ingredient();
  name;
  description;
  unit;
  _id;
  private switch = true;
  private switch2 = false;
  private switch3 = true;
  @Input() units: Unit[];

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


  }

  showSearchResults(term: string): void {
    if (term != '') {
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
    this.switch2 = !this.switch2;
    this.switch3 = !this.switch3;

  }


}

