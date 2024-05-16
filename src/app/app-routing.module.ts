import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { isAdminGuard } from './core/is-admin.guard';
import { isConnectedGuard } from './core/is-connected.guard';
import { LoginComponent } from './pages/login/login.component';

//create a route to navigate to component adminSection
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [isConnectedGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [isAdminGuard],
  },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
