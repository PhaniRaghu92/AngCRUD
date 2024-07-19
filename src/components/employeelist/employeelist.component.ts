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
    this.getAllEmployees();
  }

  //getallEmployees
  private getAllEmployees(): void {
    this.empService.getAllEmployees().subscribe(
      (res: Employee[]) => {
        this.empResult = res;
      },
      (err) => {
        this.errMessage = err.message;
      }
    );
  }
  //delete
  handleDelete(empno: number): void {
    const uRes = window.confirm('Are you sure to delete?');
    if (uRes) {
      this.empService.deleteEmployee(empno).subscribe(
        (d) => {
          this.getAllEmployees();
        },
        (e) => {
          this.errMessage = e.message;
        }
      );
    }
  }
}
