import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {IngredientService} from '../../services/ingredient.service';
import {Unit} from '../../models/unit';
import {Ingredient} from '../../models/ingredient';


@Component({
  selector: 'app-edit-ingredient',
  templateUrl: './edit-ingredient.component.html',
  styleUrls: ['./edit-ingredient.component.css'],
  providers: [IngredientService]
})
export class EditIngredientComponent implements OnInit {

  @Input() units: Unit[];
  @Input() myIngredient: Ingredient = new Ingredient();
  @Input() myUnit: Unit = new Unit();
  @ViewChild('unitTextBox2') unitTextBox;
  @ViewChild('myButton') myButton;
  @Input() deleteButtonEnabled = false;

  constructor(private router: Router, private ingredientListService: IngredientService) {
  }

  ngOnInit() {

  }

  infoUnit(unit: Unit) {
    this.myUnit = unit;
    this.myIngredient.defaultUnit = this.myUnit._id;
    this.unitTextBox.value = unit.shortDescription;

  }

  saveEditIngredient() {

    this.ingredientListService.editData(this.myIngredient).subscribe(data => console.log(data));
  }

  deleteIngredient() {

    this.ingredientListService.deleteData(this.myIngredient).subscribe(data => console.log(data));

  }

}
