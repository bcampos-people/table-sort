import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';

import { CategoryPipe } from './category/category.pipe';
import { OrderrByPipe } from './category/orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryPipe,
    OrderrByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
