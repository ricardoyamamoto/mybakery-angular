import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.category = <Category>{};
    this.categories = new Array<Category>();
  }
  /** The save method checks whether the category has already been selected.
   *  If not, then it checks whether it exists in the database.
   *  If it does, then it adds the existing category to the array.
   *  Otherwise, it inserts the category in the database and then adds it to the array. **/
  save(): void {
    if (this.alreadyAdded(this.category.name)) {
      this.category.name = '';
      return;
    }
    this.categoryService
      .findByName(this.category.name)
      .subscribe(existingCategory => {
        if (existingCategory[0] !== undefined) {
          this.categories.push(existingCategory[0]);
          this.notify.emit(this.categories);
          this.category.name = '';
        } else {
          this.addNewCategory();
          this.category.name = '';
        }
      });
  }

  /** Checks whether a category has already been selected by the user **/
  alreadyAdded(name: string): boolean {
    let i;
    for (i = 0; i < this.categories.length; i++) {
      if (this.categories[i].name === name) {
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
