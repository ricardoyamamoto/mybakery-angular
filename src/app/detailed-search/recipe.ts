import { Category } from './category';
import { User } from '../user/user';
import { RecipeIngredient } from './recipe-ingredient';

export class Recipe {

  title: string;
  category: Category;
  author: User;
  photo: string;
  numberOfServings: number;
  preparationTime: number;
  recipeIngredients: [RecipeIngredient];
  price: number;
}