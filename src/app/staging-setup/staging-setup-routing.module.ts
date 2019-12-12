import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StagingConfigurationComponent} from './staging-configuration/staging-configuration.component';

const routes: Routes = [
  {
    path:'',
    component:StagingConfigurationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagingSetupRoutingModule { }
