import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css'],
  providers: [RecipesService]
})
export class TopToolbarComponent implements OnInit {
  @Input()
  title: string;


  constructor() {
    this.title = 'MY BAKERY';

  }

  ngOnInit() {

  }




}
