import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { UserSectionComponent } from './user-section/user-section.component';

//create a route to navigate to component adminSection
const routes: Routes = [
  { path: 'admin', component: AdminSectionComponent },
  { path: 'user', component: UserSectionComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
