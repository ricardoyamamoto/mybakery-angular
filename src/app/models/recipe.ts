import { Ingredient } from './ingredient';
import { RecipeIngredient } from './recipe-ingredient';
import { Category } from './category';

export class Recipe {
  _id: string;
  title: string;
  category: Category[];
  photo: string;
  numberOfServings: number;
  preparationTime: number;
  cookingTime: number;
  recipeIngredients: RecipeIngredient[];
  price: number;
  description: string;
  lastModified: Date;
}
