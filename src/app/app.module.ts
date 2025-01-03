import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productcomponent } from './shared/components/product/product.component';
import { studentsComponent } from './shared/components/students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    productcomponent,
    studentsComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
