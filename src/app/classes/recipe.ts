import {Ingredient} from './ingredient';

export class Recipe {
  name: string;
  category: string;
  serving: number;
  time: number;
  author: string;
  description: string;
  ingredients: Ingredient[];
  keywords: string[];
}
