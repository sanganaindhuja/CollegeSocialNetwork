import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginsPageComponent } from './components/logins-page/logins-page.component';

import { StaffLoginComponent } from './components/staff-login/staff-login.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StudentResistrationComponent } from './components/student-resistration/student-resistration.component';



import { CreateListComponent} from './create-list/create-list.component';
import  {LogOutComponent} from './log-out/log-out.component';
import { FinalComponent } from './components/homepage/final/final.component';

import { RegistrationComponent } from './registration/registration.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';
import { EditComponent } from './post/edit/edit.component';
import { CreateComponent } from './post/create/create.component';
import { StaffDasboardComponent } from './staff-dasboard/staff-dasboard.component';
import { CreateFacultyComponent } from './create-faculty/create-faculty.component';
import { UpdateFacultyComponent } from './update-faculty/update-faculty.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';



const routes: Routes = [
  
  {path : 'homepage', component:HomepageComponent},
  {path : '',component:LoginsPageComponent},
  {path : 'admin-login',component:AdminLoginComponent},
  {path : 'student-login',component:StudentLoginComponent},
  {path : 'student-dashboard',component:StudentDashboardComponent},
  {path : 'staff-login',component:StaffLoginComponent},

  {path : 'student-resistration',component:StudentResistrationComponent},
  
  {path : 'admin',component:AdminComponent},
  
  {path:'Final',component:FinalComponent},
{path:'staff-dashboard',component:StaffDasboardComponent},


{ path: 'CreateList', component: CreateListComponent  },

{ path: 'LogOut', component: LogOutComponent },

{ path: 'postcopy/index', component: IndexComponent },

{ path: 'registration', component: RegistrationComponent  },
{ path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
{ path: 'post/index', component: IndexComponent },
{ path: 'post/:postId/view', component: ViewComponent },
{ path: 'post/create', component: CreateComponent },
{ path: 'post/:postId/edit', component: EditComponent } ,
{ path: 'postcopy', redirectTo: 'postcopy/index', pathMatch: 'full'},
{ path: 'postcopy/:postId/view', component: ViewComponent },
{ path: 'postcopy/create', component: CreateComponent },
{ path: 'postcopy/:postId/edit', component: EditComponent },
{ path: 'faculties', component: FacultyListComponent },
{ path: 'create-faculty', component:CreateFacultyComponent},
{ path: '', redirectTo: 'faculties', pathMatch: 'full'},
{path: 'update-faculty/:id', component: UpdateFacultyComponent},
{path: 'faculty-details/:id', component:FacultyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingComponents=[]


