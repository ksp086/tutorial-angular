import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({ // decorator
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
