import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from '../ingredient';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
})
export class IngredientDetailComponent implements OnInit {

  @Input() selectedIngredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }

}
