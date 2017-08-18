export class JsonRecipeIngredient {
  ingredient: string;
  quantity: number;
  unit: string;

  constructor(ingredient: string, quantity: number, unit: string) {
    this.ingredient = ingredient;
    this.quantity = quantity;
    this.unit = unit;
  }
}
