import { JsonRecipeIngredient } from './json-recipe-ingredient';

export class JsonRecipe {
     title: string;
     category: string[];
     recipeIngredients: JsonRecipeIngredient[];
     numberOfServings: number;
     preparationTime: number;
     cookingTime: number;
     author: string;
     description: string;
     lastModified: string;


}
