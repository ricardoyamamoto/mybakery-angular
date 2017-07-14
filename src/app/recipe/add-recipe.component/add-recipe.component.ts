import { AddRecipe } from './addrecipe';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {AddRecipeService} from './add-recipe.service';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  header = 'Add-Recipe';
  toolbarTitle = 'myBakery';
  recipeName = 'Recipe Name';
  category = 'Category';
  author = 'Author';
  numberOfServings = 'Number of Servings';
  cookingTime = 'Cooking Time';
  preparationTime = 'Preparation Time';
  submit = 'Submit';

  @Input() addRecipe: AddRecipe;

  addedRecipe: AddRecipe;

  constructor(
    private addRecipeService: AddRecipeService,
    private route: ActivatedRoute,
    private location: Location
  ) {    }
  ngOnInit() {
    this.addRecipe = <AddRecipe> {};
  };

  save(): void {

    this.addRecipeService
      .addNewRecipe(this.addRecipe)
      .subscribe(addedRecipe => {
        this.addedRecipe = addedRecipe;
      });
      console.log('Done');
  };

}
