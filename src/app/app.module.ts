import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBinding2Component } from './property-binding2/property-binding2.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({ // decorator
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PropertyBindingComponent,
    InterpolationComponent,
    PropertyBinding2Component,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
