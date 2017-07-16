import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EditRecipeService} from '../edit-recipe/edit-recipe.service';
@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  header = 'Add-Recipe';
  toolbarTitle = 'myBakery';
  recipeName = 'Recipe Name';
  category = 'Category';
  author = 'Author';
  numberOfServings = 'Number of Servings';
  cookingTime = 'Cooking Time';
  preparationTime = 'Preparation Time';
  submit = 'Submit';


  recipe = { };

  constructor(private editRecipeService: EditRecipeService,
  private router: Router,
  private route: ActivatedRoute
 ) { }

  ngOnInit() {
    this.getRecipe(this.route.snapshot.params['id']);
  }
  getRecipe(id) {
    this.editRecipeService.getRecipe(id).subscribe((res) => {
      this.recipe = res;
      console.log(this.recipe);
    }, (err) => {
      console.log(err);
    });
  }

  // updateRecipe(id) {
  //  this.editRecipeService.updateRecipe(id).then((res) => {
  //     this.recipe = res;
  //     console.log(this.recipe);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  updateRecipe(id) {
    this.editRecipeService.updateRecipe(id, this.recipe).then((result) => {
     // const id = result['_id'];
      this.router.navigate(['recipe-detail', id]);
    }, (err) => {
      console.log(err);
    });
  }
}
