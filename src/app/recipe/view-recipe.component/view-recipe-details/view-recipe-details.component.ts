import { ViewRecipe } from './../viewrecipe';
import { Component, OnInit } from '@angular/core';
import { RecipeDetailService } from './RecipeDetail.service';


@Component({
  selector: 'app-view-recipe-details',
  templateUrl: './view-recipe-details.component.html',
  styleUrls: ['./view-recipe-details.component.css']
})
export class ViewRecipeDetailsComponent implements OnInit {

  recipe: Array<any>;

  constructor(private recipeDetailService: RecipeDetailService) { }

  ngOnInit() {
    this.recipeDetailService.read().subscribe(recipe =>{
      this.recipe = recipe;
    })
  }
}
