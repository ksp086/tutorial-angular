import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBinding2Component } from './property-binding2/property-binding2.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgmodelAndTwoWayDataBindingComponent } from './ngmodel-and-two-way-data-binding/ngmodel-and-two-way-data-binding.component';

// ngmodel-and-two-way-data-binding-component
// 2
import {FormsModule} from '@angular/forms';  

@NgModule({ // decorator
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PropertyBindingComponent,
    InterpolationComponent,
    PropertyBinding2Component,
    EventBindingComponent,
    NgmodelAndTwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
