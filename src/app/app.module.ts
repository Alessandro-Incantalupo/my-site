import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { AboutMeComponent } from './modules/pages/about-me/about-me.component';
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';
import { ContactsComponent } from './modules/pages/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutMeComponent,
    PageNotFoundComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
