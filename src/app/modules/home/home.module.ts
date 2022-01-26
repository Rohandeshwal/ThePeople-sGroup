import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EventsListingComponent } from './components/events-listing/events-listing.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'  ;

import { OurGoalsComponent } from './components/our-goals/our-goals.component';
import { EventsCarouselsComponent } from './components/events-carousels/events-carousels.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    EventsListingComponent,
    AboutUsComponent,
    OurGoalsComponent,
    EventsCarouselsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,CoreModule,FontAwesomeModule
  ],
  exports: [HomeComponent, HomeRoutingModule]
})
export class HomeModule { }
