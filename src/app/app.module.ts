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
import {SharedService} from './services/shared.service';
import {RentService} from './services/rent.service';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {RentServiceReducer} from './store/reducer/rent-service.reducer';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule(
{
  declarations:
  [
    AppComponent,
    ServiceRegistrationComponent,
    NavigationMenuComponent,
    ConfirmationComponent
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
    ReactiveFormsModule,
    StoreModule.forRoot({rentService: RentServiceReducer} as ActionReducerMap<any,any>),
  ],
  providers: [SharedService,RentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
