import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../Employee.service'
import { Employee } from '../Employee';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
dataEmployee:Array<Employee>=[];
  constructor(private dataService:EmployeeService)
  {
    
  }

  ngOnInit() {
    this.dataEmployee =  this.dataService.getLists();
  }
  delete(uuid:string):void{
    this.dataEmployee = this.dataService.remove(uuid);
  }

}
