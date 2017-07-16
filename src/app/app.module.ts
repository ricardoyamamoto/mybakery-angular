import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BrowserXhr } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {CustExtBrowserXhr} from './cust-ext-browser-xhr';

import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
  MdListModule, MdToolbarModule, MdGridListModule, MdAutocompleteModule,
  MdTableModule, MdSelectModule, MdChipsModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';

import { DataSource, CdkTableModule } from '@angular/cdk';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list.component';
import { UserListService } from './services/user-list.service';
import { UserService } from './services/user.service';
import { UserDetailComponent } from './user/user-detail.component';

import { IngredientItemComponent } from './ingredient/ingredient-list/ingredient-item.component';
import { IngredientComponent} from './ingredient/ingredient.component';
import { IngredientDetailComponent} from './ingredient/ingredient-detail/ingredient-detail.component';
import { IngredientListComponent } from './ingredient/ingredient-list/ingredient-list.component';

import { TopToolbarComponent } from './shared/header/top-toolbar.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { RecipeListComponent } from './shared/recipe-list/recipe-list.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { FooterComponent } from './shared/footer/footer.component';


import { DetailedSearchComponent } from './detailed-search/detailed-search.component';
import { SearchCriterionSelectorComponent } from './detailed-search/search-criterion-selector.component';
import { DetailedSearchService } from './services/detailed-search.service';
import { AddRecipeComponent } from './recipe/add-recipe.component/add-recipe.component';
import { AddRecipeService } from './services/recipe.service';

import { RecipeIngredientComponent } from './recipe-ingredient/recipe-ingredient.component';
import { RecipeIngredientService } from './services/recipe-ingredient.service';

import { UnitService } from './services/unit.service';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './services/category.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'ingredient', component: IngredientComponent},
  { path: 'ingredients', component: IngredientListComponent },
  { path: 'detailed-search', component: DetailedSearchComponent },
  { path: 'recipe', component: AddRecipeComponent },
  { path: 'recipe-ingredient', component: RecipeIngredientComponent },
  { path: 'category', component: CategoryComponent}

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
    IngredientItemComponent,
    IngredientComponent,
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
    CategoryComponent
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
    MdTableModule, MdSelectModule, MdChipsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserListService,
    UserService,
    DetailedSearchService,
    AddRecipeService,
    RecipeIngredientService,
    UnitService,
    CategoryService,
    CustExtBrowserXhr
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
