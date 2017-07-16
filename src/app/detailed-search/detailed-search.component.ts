import { Component, OnInit } from '@angular/core';
import { DetailedSearchService } from '../services/detailed-search.service';
import { Recipe } from '../models/recipe';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detailed-search',
  templateUrl: './detailed-search.component.html',
  styleUrls: ['./detailed-search.component.css'],
  providers: [DetailedSearchService], 
})
export class DetailedSearchComponent implements OnInit {

  criterion: string;
  recipes: Observable<Recipe[]>;
  //recipes: Array<any>;
  private searchTerms = new Subject<string>();

  constructor(private detailedSearchService: DetailedSearchService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
      this.searchTerms.next(term);
  }

  ngOnInit() {
    this.recipes = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
            // return the http search observable
            ? this.detailedSearchService.readSearchedRecipes(term, this.criterion)
            // or the observable of empty heroes if there was no search term
            : Observable.of<Recipe[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Recipe[]>([]);
            });
  }

}
