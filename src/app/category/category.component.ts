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
  addedCategory: Category;

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

  save(): void {
    this.categoryService
      .addNewCategory(this.category)
      .subscribe(addedCategory => {
        this.categories.push(addedCategory);
        this.notify.emit(this.categories);
      });
  }


}
