import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from '../ingredient';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styles: []
})
export class IngredientItemComponent implements OnInit {

  @Input() ingredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }

}
