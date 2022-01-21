import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './modules/home/components/about-us/about-us.component';
import { ContactUsComponent } from './modules/home/components/contact-us/contact-us.component';
import { EventsListingComponent } from './modules/home/components/events-listing/events-listing.component';
import { HomeComponent } from './modules/home/pages/home/home.component';



const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'home', loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)},
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent},
{path:"contact", component:ContactUsComponent},
{path:"events", component:EventsListingComponent},
{path:"aboutUs", component:AboutUsComponent},
//   { path: "service/:id", component: RegisterServiceComponent,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
