// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button_signal/button.component';
import { AppRoutingModule } from './app.routing';

import { ItemDirective } from './item.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data-page/data-page.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';


// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    ItemDirective,
    ButtonComponent,
    HomeComponent,
    DataComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent, ButtonComponent]
})
export class AppModule { }
