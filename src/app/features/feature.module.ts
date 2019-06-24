import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AccountLayoutComponent } from './layout/account-layout/account-layout.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './components/account/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    
  MainLayoutComponent,
  UserProfileComponent,
  AccountLayoutComponent,
  DashboardComponent,
  LeftMenuComponent,
    
  HeaderNavComponent,
    
  LoginComponent,
    
  UserListComponent],
  imports: [
    FeatureRoutingModule,
    BrowserModule,
    FormsModule   
  ],
  providers: [],
  //bootstrap: []
})
export class FeatureModule { }
