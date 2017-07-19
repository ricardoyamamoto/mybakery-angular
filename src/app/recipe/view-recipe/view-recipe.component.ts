import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/recipe';
import {RecipeService} from '../../services/recipe.service';


@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent  implements OnInit {

   recipes: Array<Recipe>;
   constructor(
     private viewRecipeService: RecipeService) {}

     ngOnInit() {
       this.viewRecipeService.readAll().subscribe(recipes => {
         this.recipes = recipes;
       });
     };

}



