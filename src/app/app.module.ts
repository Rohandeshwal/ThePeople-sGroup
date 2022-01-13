import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {CoreModule} from './core/core.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'  ;
import { HomeModule } from './modules/home/home.module';
// import { FormsModule } from '@angular/forms';

// import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent
  
  
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,CoreModule,HomeModule,FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
