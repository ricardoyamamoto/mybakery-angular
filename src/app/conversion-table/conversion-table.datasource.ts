import { Observable} from 'rxjs/Observable';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import { ConversionRecord } from '../models/conversion-table';
import { Ingredient } from '../models/ingredient';
import {Unit} from '../models/unit';

/** An example database that the data source uses to retrieve data for the table. */
export class ConversionTableDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<ConversionRecord[]> = new BehaviorSubject<ConversionRecord[]>([]);
  get data(): ConversionRecord[] { return this.dataChange.value; }

  setData(conversionRecords: ConversionRecord[]) {
    this.dataChange.next(conversionRecords);
  }

  /** Adds a new recipe ingredient to the in memory database. */
  displayConversion(conversionRecord: ConversionRecord) {
    const copiedData = this.data.slice();
    var conversionIndex: number;
    conversionIndex = this.findIngredient(copiedData, conversionRecord.unit);
    if (conversionIndex >= 0) {
      copiedData.splice(conversionIndex, 1);
    }
    copiedData.push(conversionRecord);
    this.dataChange.next(copiedData);

  }

  /** Checks whether the provided ingredient already exists in the list **/
  findIngredient(data: ConversionRecord[], unit: Unit): number {
    let i;
    for (i = 0; i < data.length; i++) {
      if (data[i].unit === unit) {
        return i;
      }
    }
    return - 1;
  }

  /** Removes a recipe ingredient from the in memory database. **/
  deleteIngredient(conversionRecord: ConversionRecord) {
    const copiedData = this.data.slice();
    copiedData.splice(copiedData.indexOf(conversionRecord), 1);
    this.dataChange.next(copiedData);
  }

}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ConversionTableDataSource extends DataSource<any> {
  constructor(private _conversionTableDatabase: ConversionTableDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ConversionRecord[]> {
    return this._conversionTableDatabase.dataChange;
  }

  disconnect() {}
}
