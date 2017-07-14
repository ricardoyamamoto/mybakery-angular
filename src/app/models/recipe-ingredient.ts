import { Ingredient } from './ingredient';
import { Unit } from './unit';

export class RecipeIngredient {
  ingredient: Ingredient;
  quantity: number;
  unit: Unit;

  constructor(ingredient: Ingredient, quantity: number, unit: Unit) {
    this.ingredient = ingredient;
    this.quantity = quantity;
    this.unit = unit;
  }
}
