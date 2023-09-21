import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./modules/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./modules/pages/home/home.component";
import {AboutMeComponent} from "./modules/pages/about-me/about-me.component";
import {ContactsComponent} from "./modules/pages/contacts/contacts.component";

const routes: Routes = [
  // pathMatch: Determines how the router should match the route with the URL. It can be either 'full' or 'prefix'. When set to 'full',
  // the router will match the route if the URL is an exact match. 'prefix' will match if the URL starts with the path. For empty path routes,
  // you should use 'full'.
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'contacts', component: ContactsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
