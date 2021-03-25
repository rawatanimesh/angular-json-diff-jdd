import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DifferentiateModule } from '@sedeh/differentiate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DifferentiateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
