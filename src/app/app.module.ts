import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './modules/material.module';
import {ServiceRegistrationComponent} from './components/service-registration/service-registration.component';
import {NavigationMenuComponent} from './components/navigation-menu/navigation-menu.component';

@NgModule(
{
  declarations:
  [
    AppComponent,
    ServiceRegistrationComponent,
    NavigationMenuComponent
  ],
  imports:
  [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    GoogleMapsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
