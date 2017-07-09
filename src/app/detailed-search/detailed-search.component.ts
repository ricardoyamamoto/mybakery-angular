import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-search',
  templateUrl: './detailed-search.component.html',
  styleUrls: ['./detailed-search.component.css']
})
export class DetailedSearchComponent implements OnInit {

  criterion: string;

  constructor() { }

  ngOnInit() {
  }

}
