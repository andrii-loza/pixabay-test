import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './components/images/images.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { OptionInputComponent } from './components/option-input/option-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    SearchInputComponent,
    OptionInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
