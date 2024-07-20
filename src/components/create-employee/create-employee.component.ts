import { Component } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent {
  public empCreate: Employee = new Employee();
  public errMessage: string = '';

  constructor(private empService: EmployeeService) {}

  handleSaveClick(): void {
    if (this.empCreate.empName === '') {
      this.errMessage = `the field empname is required`;
      return;
    }

    this.empService.createEmployee(this.empCreate).subscribe(
      (res) => {
        if (res) {
          window.location.href = '/';
        }
      },
      (error) => {
        alert('Error');
      }
    );
  }
}
