import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';

import { ViewRecipeDetailsComponent } from './recipe/view-recipe.component/view-recipe-details/view-recipe-details.component';
import { ViewRecipeService } from './recipe/view-recipe.component/view-recipe.service';
import { ViewRecipeComponent } from './recipe/view-recipe.component/view-recipe.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { AddRecipeComponent } from './recipe/add-recipe.component/add-recipe.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
  MdListModule, MdToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { UserListService } from './user/user-list.service';
import { UserDetailComponent } from './user/user-detail.component';
import { UserDetailService } from './user/user-detail.service';
import { AddRecipeService } from './recipe/add-recipe.component/add-recipe.service';
import { RecipeDetailService } from './recipe/view-recipe.component/view-recipe-details/recipe-detail.service';
import { EditRecipeService } from './recipe/edit-recipe/edit-recipe.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'addrecipie', component: AddRecipeComponent},
  {path: 'viewrecipe', component: ViewRecipeComponent},
  {path: 'recipe-detail/:id', component: ViewRecipeDetailsComponent},
  {path: 'edit-recipe/:id', component: EditRecipeComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    TopToolbarComponent,
    UserDetailComponent,
    AddRecipeComponent,
    FileSelectDirective,
    ViewRecipeComponent,
    ViewRecipeDetailsComponent,
    EditRecipeComponent
  ],
  imports: [
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
    MdListModule, MdToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserListService,
    UserDetailService,
    AddRecipeService,
    ViewRecipeService,
    RecipeDetailService, {provide: LocationStrategy, useClass: HashLocationStrategy},
    EditRecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
