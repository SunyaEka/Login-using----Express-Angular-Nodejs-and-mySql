import { Routes, RouterModule, Router } from '@angular/router';
import { CreateUserComponent } from '../app/create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guards/authGuards';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './common/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './common/forgot-password/forgot-password.component';
import { UnauthorizedComponent } from './common/unauthorized/unauthorized.component';
import { CreateNewPasswordComponent } from './common/create-new-password/create-new-password.component';

const  routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'create' , component: CreateUserComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'create-new-password/:token', component: CreateNewPasswordComponent},
  { path: 'unauthorized', component: UnauthorizedComponent},
  { path: '**', component: PageNotFoundComponent},
]

export const appRouterModule = RouterModule.forRoot(routes);
export const routingComponents = [ CreateUserComponent, LoginComponent, DashboardComponent, ResetPasswordComponent, ForgotPasswordComponent, CreateNewPasswordComponent, UnauthorizedComponent, PageNotFoundComponent];
