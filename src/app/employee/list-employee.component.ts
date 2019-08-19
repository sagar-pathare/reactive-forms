import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../services/employee.service";
import { IEmployee } from "../interfaces/IEmployee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees : IEmployee[];
  constructor(private _empService: EmployeeService) { }

  ngOnInit() {
    this._empService.getEmployees().subscribe((listemployees: any) => {
      this.employees = listemployees;
      (err:any) => console.log("Error", err);
    })
  }

}
