import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService} from '../../services/recipe.service';
import {JsonRecipe} from '../json-recipe';
import {Category} from '../../models/category';
import {RecipeIngredient} from '../../models/recipe-ingredient';
import {JsonRecipeIngredient} from 'app/recipe/json-recipe-ingredient';
import {Recipe} from '../../models/recipe';
@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  header = 'Edit Recipe';
  toolbarTitle = 'myBakery';
  recipeName = 'Recipe Name';
  category = 'Category';
  author = 'Author';
  numberOfServings = 'Number of Servings';
  cookingTime = 'Cooking Time';
  preparationTime = 'Preparation Time';
  description = 'Description';
  submit = 'Submit';
  back = 'Back';
  recipeIngredients: RecipeIngredient[];
  categories: Category[];
  editRecipe: JsonRecipe;

  @Input() recipe: Recipe;

  constructor(private editRecipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location
 ) { }

  ngOnInit() {

    this.editRecipeService.getRecipe(this.route.snapshot.params['id']).subscribe((res) => {
      this.recipe = res;
      this.recipeIngredients = this.recipe.recipeIngredients;
      this.categories = this.recipe.category;
      this.editRecipe = <JsonRecipe>{};
      this.editRecipe.title = this.recipe.title;
      this.editRecipe.numberOfServings = this.recipe.numberOfServings;
      this.editRecipe.preparationTime = this.recipe.preparationTime;
      this.editRecipe.cookingTime = this.recipe.cookingTime;
      this.editRecipe.description = this.recipe.description;

      console.log(this.recipeIngredients);
      console.log(this.categories);
    }, (err) => {
      console.log(err);
    });
  }

  goBack(): void {
    this.location.back();
  }

  updateRecipe(id) {
    this.editRecipe.lastModified = new Date().toString();
    this.editRecipeService.updateRecipe(id, this.editRecipe).then((result) => {
     // const id = result['_id'];
      this.router.navigate(['detailed-search']);
    }, (err) => {
      console.log(err);
    });
  }


  onNotifyCategories(categories: Category[]): void {
    this.editRecipe.category = [];
    for (let i = 0; i < categories.length; i++) {
      this.editRecipe.category.push(categories[i]._id);
    }
  }

  onNotifyIngredients(recipeIngredients: RecipeIngredient[]): void {
    this.editRecipe.recipeIngredients = [];
    for (let i = 0; i < recipeIngredients.length; i++) {
      let recipeIngredient: JsonRecipeIngredient;
      recipeIngredient = new JsonRecipeIngredient(
        recipeIngredients[i].ingredient._id,
        recipeIngredients[i].quantity,
        recipeIngredients[i].unit._id
      );
      this.editRecipe.recipeIngredients.push(recipeIngredient);
    }
  }

}
