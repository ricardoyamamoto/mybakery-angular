import { ViewRecipe } from './../viewrecipe';
import { Component, OnInit } from '@angular/core';
import { RecipeDetailService } from './recipe-detail.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-view-recipe-details',
  templateUrl: './view-recipe-details.component.html',
  styleUrls: ['./view-recipe-details.component.css']
})
export class ViewRecipeDetailsComponent implements OnInit {

   recipe: Array<any>;
   // recipe = {};
  constructor(private route: ActivatedRoute, private router: Router, private recipeDetailService: RecipeDetailService) { }

  ngOnInit() {
  this.getRecipeDetails(this.route.snapshot.params['_id']);
  }

   getRecipeDetails(id) {
       this.recipeDetailService.getRecipe(id).subscribe(recipe => {
         this.recipe = recipe;
       });
      }


  getRecipe(id) {
    this.recipeDetailService.getRecipe(id).subscribe((res) => {
      this.recipe = res;
      console.log(this.recipe);
    }, (err) => {
      console.log(err);
    });
  }

}
