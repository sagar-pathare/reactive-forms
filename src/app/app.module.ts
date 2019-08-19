import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { EmployeeRoutingModule } from './employee/employee-routing.module';
import { EmlpoyeeModule } from './employee/employee.module';
import { CoreComponentModule } from "./core-components/core-components.module";
import { CoreComponentRoutingModule } from "./core-components/core-components-routing.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EmployeeRoutingModule,
    CoreComponentRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    EmlpoyeeModule,
    CoreComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
