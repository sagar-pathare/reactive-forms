import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeeComponent } from './list-employee.component';

import { EmployeeService } from "../services/employee.service";

@NgModule({
    declarations: [
        CreateEmployeeComponent,
        ListEmployeeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [EmployeeService]
})
export class EmlpoyeeModule { }
