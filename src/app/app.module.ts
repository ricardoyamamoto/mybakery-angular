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


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { UserListService } from './user/user-list.service';
import { UserDetailComponent } from './user/user-detail.component';
import { UserDetailService } from './user/user-detail.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user-detail', component: UserDetailComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    TopToolbarComponent,
    UserDetailComponent
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
    UserDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
