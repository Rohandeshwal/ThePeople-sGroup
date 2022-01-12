import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EventsListingComponent } from './components/events-listing/events-listing.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    EventsListingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,CoreModule
  ],
  exports: [HomeComponent, HomeRoutingModule]
})
export class HomeModule { }
