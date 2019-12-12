import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { RoleComponent } from './role/role.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [RoleComponent]
})
export class UserManagementModule { }
