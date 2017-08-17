import {Ingredient} from './ingredient';
import {Unit} from './unit';

export class ConversionRecord {
  _id: string;
  ingredient: Ingredient;
  unit: Unit;
  quantity: number;

  constructor(_id: string, ingredient: Ingredient, unit: Unit, quantity: number) {
    this._id = _id;
    this.ingredient = ingredient;
    this.unit = unit;
    this.quantity = quantity;
  }

}

export class ConversionJSON {
  _id: string;
  ingredient: string;
  unit: string;
  quantity: number;
  constructor(ingredient: string, unit: string, quantity: number) {
    this.ingredient = ingredient;
    this.unit = unit;
    this.quantity = quantity;
  }
}
