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
  @Input() delButtonEnabled = false;
  private myConfirm;

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

    this.myConfirm = confirm('Are you sure you wan to delete this ingredient?');

    if (this.myConfirm) {

      this.ingredientListService.deleteData(this.myIngredient).subscribe(data => console.log(data));

    }
  }

}
