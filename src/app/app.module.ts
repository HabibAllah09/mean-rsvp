// #1 - in order to change the page title for our routes
//      angular added new service called title service
//      the problem came from that the title live outside
//      our angular app cause it lives in the head tag
//      to use it we have to add import it then
//      add it to the providers array
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
