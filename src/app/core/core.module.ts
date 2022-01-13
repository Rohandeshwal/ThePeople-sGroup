import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'  ;



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,FontAwesomeModule
  ],
  exports: [HeaderComponent, CoreRoutingModule,FooterComponent]

})
export class CoreModule { }
