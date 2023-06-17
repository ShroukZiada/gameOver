import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { JoinUsComponent } from './join-us/join-us.component';

const routes: Routes = [
  {path:'', redirectTo:'signIn', pathMatch:'full'},
  {path:'logIn',  component: LogInComponent, title:'LogIn'},
  {path:'joinUs', component:JoinUsComponent , title:'joinUs'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
