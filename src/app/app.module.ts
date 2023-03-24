import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskitemComponent } from './taskitem/taskitem.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskformComponent } from './taskform/taskform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskitemComponent,
    TasklistComponent,
    TaskformComponent,
    PagenotfoundComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
