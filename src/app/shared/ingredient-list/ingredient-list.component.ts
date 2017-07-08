import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ngOnInit() {

  }


  @Input()
  title: string;




}
