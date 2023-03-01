import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,//taratyıcı import
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]//Burda ilk çalışacak componenti belirtiriz 
})
export class AppModule { }
