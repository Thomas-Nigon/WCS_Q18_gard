import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { UserSectionComponent } from './user-section/user-section.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminSectionComponent,
    UserSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
