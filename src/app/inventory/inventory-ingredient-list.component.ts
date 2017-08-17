import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {IngredientListService} from '../services/ingredient-list.service';
import {IngredientSearchService} from '../services/ingredient-search.service';
import {Ingredient} from '../models/ingredient';
import {IngredientService} from '../services/ingredient.service';

@Component({
  selector: 'app-inventory-ingredient-list',
  templateUrl: './inventory-ingredient-list.component.html',
  styleUrls: ['./inventory-ingredient-list.component.css'],
  providers: [IngredientService]
})

export class InventoryIngredientListComponent implements OnInit {

  /** Variables used to store the ingredients**/
  ingredients: Array<Ingredient>;

  page: number = 0;


  constructor(private ingredientListService: IngredientListService,
              private ingredientSearchService: IngredientSearchService,
              private ingredientService: IngredientService) {}

  ngOnInit() {
    this.ingredientListService.readAll().subscribe(ingredients => {
      this.ingredients = ingredients;
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

  saveEditIngredientQuantity(myIngredient : Ingredient, quantity : number) : void {
    myIngredient.quantity = quantity; 
    this.ingredientService.editData(myIngredient).subscribe(data => console.log(data));
  }


}

