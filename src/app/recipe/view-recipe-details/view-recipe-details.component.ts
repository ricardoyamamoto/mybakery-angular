import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../models/recipe';


@Component({
  selector: 'app-view-recipe-details',
  templateUrl: './view-recipe-details.component.html',
  styleUrls: ['./view-recipe-details.component.css']
})
export class ViewRecipeDetailsComponent implements OnInit {

  /*recipe: Array<any>;*/
  recipe: Recipe;
  back = 'Back';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeDetailService: RecipeService,
    private location: Location) { }

  ngOnInit() {
    this.getRecipeDetails(this.route.snapshot.params['id']);
  }

  getRecipeDetails(id) {
    this.recipeDetailService
      .getRecipe(id)
      .subscribe((res) => {
        this.recipe = res;
        console.log(this.recipe);
      }, (err) => {
        console.log(err);
      });
  }

  goBack(): void {
    this.location.back();
  }
  // getRecipe(id) {
  //   this.recipeDetailService.getRecipe(id).subscribe((res) => {
  //     this.recipe = res;
  //     console.log(this.recipe);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

}
