import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { ServiceRegistrationComponent } from './service-registration/service-registration.component';

@NgModule(
{
  declarations:
  [
    AppComponent,
    ServiceRegistrationComponent
  ],
  imports:
  [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
