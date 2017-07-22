import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-criterion-selector',
  templateUrl: './search-criterion-selector.component.html',
  styleUrls: ['./search-criterion-selector.component.css']
})
export class SearchCriterionSelectorComponent {
    @Output() select = new EventEmitter();
    criteria: Array<string> = ["Category", "Title"] //"Keyword", "User"];

    ngOnInit() {
        this.select.emit(this.criteria[0]);
    }
}