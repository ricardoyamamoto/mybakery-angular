import { Component, OnInit } from '@angular/core';
import {Ingredient} from './ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html'
})
export class IngredientComponent implements OnInit {
  selectedIngredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

}
