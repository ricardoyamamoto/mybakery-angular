import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Unit} from '../../models/unit';
import {Ingredient} from '../../models/ingredient';
import {Router} from '@angular/router';
import {IngredientService} from '../../services/ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css'],
  providers: [IngredientService]
})
export class AddIngredientComponent implements OnInit {

  @Input() units: Unit[];
  @Input() myIngredient: Ingredient = new Ingredient();
  @Input() myUnit: Unit;
  @ViewChild('unitTextBox') unitTextBox;

  constructor(private router: Router, private ingredientListService: IngredientService) {
  }

  ngOnInit() {
    // this.ingredientListService.readUnits().subscribe((data: Unit[]) => {
    //   this.units = new Array<Unit>();
    //   this.units = data;
    // });
  }

  infoUnit(unit: Unit) {
    this.myUnit = unit;
    this.myIngredient.defaultUnit = this.myUnit._id;
    this.unitTextBox.value = unit.shortDescription;
  }

  addIngredient() {

    if (!this.myIngredient.hasOwnProperty('description')) {
      this.myIngredient.description = ' ';
    }
    this.ingredientListService.sendData(this.myIngredient).subscribe(data => {
      console.log(data);
    });
  }

}
