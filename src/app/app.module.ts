import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { SearchComplexComponent } from './home/search/search-complex/search-complex.component';
import { CategoryComponent } from './home/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComplexComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
