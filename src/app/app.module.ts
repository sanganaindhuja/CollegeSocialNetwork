import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginsPageComponent } from './components/logins-page/logins-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StaffLoginComponent } from './components/staff-login/staff-login.component';

import { StudentResistrationComponent } from './components/student-resistration/student-resistration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './components/admin/admin.component';
import { CreateListComponent } from './create-list/create-list.component';

import { LogOutComponent } from './log-out/log-out.component';
import { FinalComponent } from './components/homepage/final/final.component';

import { RegistrationComponent } from './registration/registration.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { PostModule } from './post/post.module';
import { HttpClientModule } from '@angular/common/http';

import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import { StaffDasboardComponent } from './staff-dasboard/staff-dasboard.component';
import { CreateFacultyComponent } from './create-faculty/create-faculty.component';
import { UpdateFacultyComponent } from './update-faculty/update-faculty.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginsPageComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    StaffLoginComponent,
   
    StudentResistrationComponent,
    
    AdminComponent,
    CreateListComponent,
    
    LogOutComponent,
    FinalComponent,
    
    RegistrationComponent,
    StudentDashboardComponent,
    
    StaffDasboardComponent,
    FacultyListComponent,
    CreateFacultyComponent,
    UpdateFacultyComponent,
    FacultyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    PostModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private library: FaIconLibrary) {
    library.addIcons(faUpload);
  }

 }
