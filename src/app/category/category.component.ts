import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Array<Category>;
  category: Category;

  @Output() notify: EventEmitter<Category[]> = new EventEmitter<Category[]>();

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.category = <Category>{};
    this.categories = new Array<Category>();
    /*this.categoryService.readAll().subscribe(categories => {
      this.categories = categories;
    });*/
  }
  /** The save method checks whether the category has already been selected.
   *  If not, then it checks whether it exists in the database.
   *  If it does, then it adds the existing category to the array.
   *  Otherwise, it inserts the category in the database and then adds it to the array. **/
  save(): void {
    if (this.alreadySelected(this.category)) {
      return;
    }
    this.categoryService
      .findByName(this.category.name)
      .subscribe(existingCategory => {
        if (existingCategory[0] !== undefined) {
          this.categories.push(existingCategory[0]);
          this.notify.emit(this.categories);
        } else {
          this.addNewCategory();
        }
      });
  }

  /** Checks whether a category has already been selected by the user **/
  alreadySelected(newElement: Category): boolean {
    let i;
    for (i = 0; i < this.categories.length; i++) {
      if (this.categories[i].name === newElement.name) {
        return true;
      }
    }
    return false;
  }

  /** Adds the category to the database **/
  addNewCategory(): void {
    this.categoryService
      .addNewCategory(this.category)
      .subscribe(newCategory => {
        this.categories.push(newCategory);
        this.notify.emit(this.categories);
      });
  }


}
