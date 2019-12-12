import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagingSetupRoutingModule } from './staging-setup-routing.module';
import { StagingConfigurationComponent } from './staging-configuration/staging-configuration.component';

@NgModule({
  declarations: [StagingConfigurationComponent],
  imports: [
    CommonModule,
    StagingSetupRoutingModule
  ]
})
export class StagingSetupModule { }
