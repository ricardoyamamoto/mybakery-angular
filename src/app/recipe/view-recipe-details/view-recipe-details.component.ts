import { Component, OnInit } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeDetailService: RecipeService) { }

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


  // getRecipe(id) {
  //   this.recipeDetailService.getRecipe(id).subscribe((res) => {
  //     this.recipe = res;
  //     console.log(this.recipe);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

}
