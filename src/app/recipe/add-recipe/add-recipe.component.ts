import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {RecipeService} from '../../services/recipe.service';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { CustomValidators } from 'ng2-validation';

import { Recipe } from '../../models/recipe';
import { RecipeIngredient } from '../../models/recipe-ingredient';
import { Category } from '../../models/category';
import { JsonRecipe } from '../json-recipe';
import { JsonRecipeIngredient } from '../json-recipe-ingredient';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  header = 'Add Recipe';
  toolbarTitle = 'myBakery';
  title = 'Recipe Title';
  category = 'Category';
  author = 'Author';
  numberOfServings = 'Number of Servings';
  description = 'Description';
  preparationTime = 'Preparation Time';
  cookingTime = 'Cooking Time';
  submit = 'Submit';
  back = 'Back';
  // for image upload
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3001/upload'});

  @Input() addRecipe: JsonRecipe;
  categories: string[];
  recipeIngredients: Array<JsonRecipeIngredient>;

  addedRecipe: Recipe;

  constructor(
    private addRecipeService: RecipeService,
    private router: Router,
    private location: Location
  ) {    }

  ngOnInit() {
    this.addRecipe = <JsonRecipe> {};
  };

  save(): void {
    this.addRecipe.lastModified = new Date().toString();
    this.addRecipeService
      .addNewRecipe(this.addRecipe)
      .subscribe(addedRecipe => {
        this.addedRecipe = addedRecipe;
        this.router.navigate(['detailed-search']);
      });
      console.log('Done');
  };

  goBack(): void {
    this.location.back();
  }


  onNotifyCategories(categories: Category[]): void {
    this.addRecipe.category = [];
    for (let i = 0; i < categories.length; i++) {
      this.addRecipe.category.push(categories[i]._id);
    }
  }

  onNotifyIngredients(recipeIngredients: RecipeIngredient[]): void {
    this.addRecipe.recipeIngredients = [];
    for (let i = 0; i < recipeIngredients.length; i++) {
      var recipeIngredient: JsonRecipeIngredient;
      recipeIngredient = new JsonRecipeIngredient(
        recipeIngredients[i].ingredient._id,
        recipeIngredients[i].quantity,
        recipeIngredients[i].unit._id
      );
      this.addRecipe.recipeIngredients.push(recipeIngredient);
    }
  }

}
