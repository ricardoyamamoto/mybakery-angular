import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BrowserXhr } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {CustExtBrowserXhr} from './cust-ext-browser-xhr';

import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
  MdListModule, MdToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { UserListService } from './user/user-list.service';
import { UserService } from './user/user.service';
import { UserDetailComponent } from './user/user-detail.component';
import { DetailedSearchComponent } from './detailed-search/detailed-search.component';
import { SearchCriterionSelectorComponent } from './detailed-search/search-criterion-selector.component';
import { DetailedSearchService } from './detailed-search/detailed-search.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'detailed-search', component: DetailedSearchComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    TopToolbarComponent,
    UserDetailComponent,
    DetailedSearchComponent,
    SearchCriterionSelectorComponent
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
    UserService,
    DetailedSearchService,
    CustExtBrowserXhr
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
