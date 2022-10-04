import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'signin', pathMatch:'full'},
  {
    path:'signin',
    component: SigninComponent,
  },
  {
        path:'signup',
       component: SignupComponent
  },
  {
    path:'dashboard',
   component: DashboardComponent,
   canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
