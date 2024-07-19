import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css',
})
export class EmployeelistComponent implements OnInit {
  public empResult: Employee[] = [];
  public errMessage: string = '';
  constructor(private empService: EmployeeService) {}
  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe(
      (res: Employee[]) => {
        this.empResult = res;
      },
      (err) => {
        this.errMessage = err.message;
      }
    );
  }
}
