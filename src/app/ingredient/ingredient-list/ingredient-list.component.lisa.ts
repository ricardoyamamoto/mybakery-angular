import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IngredientListService } from '../../services/ingredient-list.service';
import { IngredientSearchService } from '../../services/ingredient-search.service';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-ingredient-list-lisa',
  templateUrl: './ingredient-list.component.lisa.html',
  styleUrls: ['./ingredient-list.component.lisa.css']
})

export class IngredientListLisaComponent implements OnInit {    //////////// change name

    /** Variables used to store the ingredients**/
    ingredients: Array<Ingredient>;

    constructor(
        private ingredientListService: IngredientListService,
        private ingredientSearchService: IngredientSearchService,
        private router: Router
    ) {}

    ngOnInit() {
        this.ingredientListService.readAll().subscribe(ingredients => {
        this.ingredients = ingredients;
        });
    }

    showSearchResults(term : string): void {
        if (term != "")
        {
            this.ingredients = [];
            this.ingredientSearchService.readSearchedIngredients(term).subscribe(ingredients => {
                this.ingredients = ingredients;
            });
        }
    }

    resetSearchResults(): void {
        this.ingredients = [];
        this.ngOnInit();
    }
}

