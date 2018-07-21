import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import {DetailEmployeeComponent} from './detail-employee/detail-employee.component';
import {EmployeeService} from './Employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService,
    ListEmployeeComponent,
    DetailEmployeeComponent
  ],
  declarations: [ListEmployeeComponent,EmployeeComponent,DetailEmployeeComponent]
})
export class EmployeeModule { }
