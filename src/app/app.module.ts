import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, BrowserXhr} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import {CustExtBrowserXhr} from './cust-ext-browser-xhr';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
  MdListModule, MdToolbarModule, MdGridListModule, MdAutocompleteModule,
  MdTableModule, MdSelectModule, MdChipsModule, MdPaginatorModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ImageUploadModule } from 'angular2-image-upload';

import {CdkTableModule} from '@angular/cdk';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {UserListComponent} from './user/user-list.component';
import {UserListService} from './services/user-list.service';
import {UserService} from './services/user.service';
import {UserDetailComponent} from './user/user-detail.component';

import {IngredientDetailComponent} from './ingredient/ingredient-detail/ingredient-detail.component';
import {IngredientListComponent} from './ingredient/ingredient-list/ingredient-list.component';
import {IngredientListService} from './services/ingredient-list.service';
import {IngredientSearchService} from './services/ingredient-search.service';
import {CheckIngredientUseService} from './services/check-ingredient-use.service';

import {TopToolbarComponent} from './shared/header/top-toolbar.component';
import {SidenavComponent} from './shared/sidenav/sidenav.component';
import {RecipeListComponent} from './shared/recipe-list/recipe-list.component';
import {PaginationComponent} from './shared/pagination/pagination.component';
import {FooterComponent} from './shared/footer/footer.component';

import {DetailedSearchComponent} from './detailed-search/detailed-search.component';
import {SearchCriterionSelectorComponent} from './detailed-search/search-criterion-selector.component';

import {SearchByTitleService} from './services/search-by-title.service';
import {SearchByCategoryService} from './services/search-by-category.service';
import {RecipeListService} from './services/recipe-list.service';
import {AddRecipeComponent} from './recipe/add-recipe/add-recipe.component';

import {RecipeService} from './services/recipe.service';

import {RecipeIngredientComponent} from './recipe-ingredient/recipe-ingredient.component';
import {RecipeIngredientService} from './services/recipe-ingredient.service';

import {UnitService} from './services/unit.service';
import {CategoryComponent} from './category/category.component';
import {CategoryService} from './services/category.service';

import {ViewRecipeComponent} from './recipe/view-recipe/view-recipe.component';
import {ViewRecipeDetailsComponent} from './recipe/view-recipe-details/view-recipe-details.component';
import {EditRecipeComponent} from './recipe/edit-recipe/edit-recipe.component';
import {IngredientService} from './services/ingredient.service';
import { InventoryIngredientListComponent } from './inventory/inventory-ingredient-list.component';
import {MdlModule} from '@angular-mdl/core';
import { AddIngredientComponent } from './ingredient/add-ingredient/add-ingredient.component';
import { EditIngredientComponent } from './ingredient/edit-ingredient/edit-ingredient.component';
import { ConversionTableComponent } from './conversion-table/conversion-table.component';
import {ConversionTableService} from './services/conversion-table.service';


import { ProfitMarginComponent } from './profit-margin/profit-margin.component';
import {ProfitMarginService} from './services/profit-margin';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserListComponent},
  {path: 'user-detail', component: UserDetailComponent},
  {path: 'ingredients', component: IngredientListComponent},
  {path: 'detailed-search', component: DetailedSearchComponent},
  {path: 'recipe', component: AddRecipeComponent},
  {path: 'recipe-ingredient', component: RecipeIngredientComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'view-recipe', component: ViewRecipeComponent},
  {path: 'recipe-detail/:id', component: ViewRecipeDetailsComponent},
  {path: 'edit-recipe/:id', component: EditRecipeComponent},
  {path: 'inventory', component: InventoryIngredientListComponent},
  {path: 'conversion-table/:id', component: ConversionTableComponent},
   {path: 'profit-margin', component: ProfitMarginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    TopToolbarComponent,
    UserDetailComponent,
    IngredientListComponent,
    IngredientDetailComponent,
    TopToolbarComponent,
    SidenavComponent,
    RecipeListComponent,
    PaginationComponent,
    FooterComponent,
    DetailedSearchComponent,
    SearchCriterionSelectorComponent,
    AddRecipeComponent,
    RecipeIngredientComponent,
    CategoryComponent,
    ViewRecipeComponent,
    ViewRecipeDetailsComponent,
    EditRecipeComponent,
    AddIngredientComponent,
    EditIngredientComponent,
    InventoryIngredientListComponent,
    ConversionTableComponent,
    ProfitMarginComponent,
    FileSelectDirective,
    FileDropDirective
  ],
  imports: [
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    CdkTableModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
    MdListModule, MdToolbarModule, MdGridListModule, MdAutocompleteModule,
    MdTableModule, MdSelectModule, MdChipsModule, MdPaginatorModule,
    ReactiveFormsModule,
    ImageUploadModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MdlModule
  ],
  providers: [
    UserListService,
    UserService,
    SearchByTitleService,
    SearchByCategoryService,
    RecipeListService,
    RecipeService,
    IngredientListService,
    IngredientSearchService,
    CheckIngredientUseService,
    RecipeIngredientService,
    UnitService,
    CategoryService,
    CustExtBrowserXhr,
    ConversionTableService,
    IngredientService,
    ProfitMarginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
