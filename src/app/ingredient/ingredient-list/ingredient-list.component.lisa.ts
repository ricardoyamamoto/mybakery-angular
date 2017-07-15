import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IngredientListService } from '../../services/ingredient-list.service';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-ingredient-list-lisa',
  templateUrl: './ingredient-list.component.lisa.html',
  styleUrls: ['./ingredient-list.component.lisa.css']
})

export class IngredientListLisaComponent implements OnInit {    //////////// change name

    /** Variables used to store the ingredients**/
    ingredients: Array<Ingredient>;

    //displayedColumns = ['ingredientName', 'defaultUnit', 'edit'];


    constructor(
        private ingredientListService: IngredientListService,
        private router: Router
    ) {}

    ngOnInit() {
        this.ingredientListService.readAll().subscribe(ingredients => {
        this.ingredients = ingredients;
    });
    }
}

