import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
  MdListModule, MdToolbarModule, MdGridListModule, MdAutocompleteModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list.component';
import { TopToolbarComponent } from './shared/header/top-toolbar.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { RecipeListComponent } from './shared/recipe-list/recipe-list.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IngredientListComponent } from './shared/ingredient-list/ingredient-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent },
  { path: 'ingredients', component: IngredientListComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    TopToolbarComponent,
    SidenavComponent,
    RecipeListComponent,
    PaginationComponent,
    FooterComponent,
    IngredientListComponent
  ],
  imports: [
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
    MdListModule, MdToolbarModule, MdGridListModule, MdAutocompleteModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
