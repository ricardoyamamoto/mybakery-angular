import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIngredientComponent } from './edit-ingredient.component';

describe('EditIngredientComponent', () => {
  let component: EditIngredientComponent;
  let fixture: ComponentFixture<EditIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
