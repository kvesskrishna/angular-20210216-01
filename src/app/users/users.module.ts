import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { SalaryComponent } from './salary/salary.component';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [SalaryComponent, UsersComponent, UserComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
})
export class UsersModule {}
