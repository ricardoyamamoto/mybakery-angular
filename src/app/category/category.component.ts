import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, FormGroupDirective, NgForm} from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnChanges {


  categoryForm = new FormGroup({
    name : new FormControl()
  });

  get name() { return this.categoryForm.get('name'); }

  @Input() categories: Array<Category>;
  category: Category;

  @Output() notify: EventEmitter<Category[]> = new EventEmitter<Category[]>();

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({
      name : ['']
    });
  }

  ngOnInit() {
    this.createForm();
    this.category = <Category>{};
    if (! this.categories) {
      this.categories = new Array<Category>();
    }
  }

  ngOnChanges() {
    this.categoryForm.reset();
  }

  /**
   * This method creates an emty form for Category.
   * */
  createForm() {
    this.categoryForm.reset();
    this.categoryForm.setValidators(null);
    this.categoryForm = this.fb.group({
      name : ['', Validators.required]
    });
  }


  /** The save method checks whether the category has already been selected.
   *  If not, then it checks whether it exists in the database.
   *  If it does, then it adds the existing category to the array.
   *  Otherwise, it inserts the category in the database and then adds it to the array. **/
  save(): void {
    if (this.alreadyAdded(this.category.name)) {
      this.categoryForm.reset();
      return;
    }
    this.categoryService
      .findByName(this.category.name)
      .subscribe(existingCategory => {
        if (existingCategory[0] !== undefined) {
          this.categories.push(existingCategory[0]);
          this.notify.emit(this.categories);
          this.categoryForm.reset();
        } else {
          this.addNewCategory();
          this.categoryForm.reset();
        }
      });
  }

  myErrorStateMatcher(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  /** Checks whether a category has already been selected by the user **/
  alreadyAdded(name: string): boolean {
    /*if (this.categories === undefined) {
      return false;
    }*/
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
