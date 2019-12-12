import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BfsiShowHideComponent } from '../app/bfsi-show-hide/bfsi-show-hide.component'
const routes: Routes = [{
  path: '',
  loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
},
{
  path: 'staging',
  loadChildren: () => import('./staging-setup/staging-setup.module').then(mod => mod.StagingSetupModule)
},
{
  path: 'user',
  loadChildren: () => import('./user-management/user-management.module').then(mod => mod.UserManagementModule)
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
