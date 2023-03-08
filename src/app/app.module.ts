import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,//taratyıcı import
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]//Burda ilk çalışacak componenti belirtiriz 
})
export class AppModule { }
