import { Component, OnInit } from '@angular/core';
import {ViewRecipeService } from './view-recipe.service';
import { ViewRecipe } from './viewrecipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent  implements OnInit {

   recipe: Array<any>;

   constructor(
     private viewRecipeService: ViewRecipeService) {}

     ngOnInit() {
       this.viewRecipeService.readAll().subscribe(recipe => {
         this.recipe = recipe;
       });

      }
     }



