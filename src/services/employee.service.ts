import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './../models/Employee';

@Injectable()
// @Injectable({
//   providedIn: 'root', // providersIn: 'root' tells anguar app to create a singleton object which will be availablt to complete app (can be accessed in any module)
// })
export class EmployeeService {
  baseURL: string = 'http://localhost:5000';
  constructor(private httpClient: HttpClient) {}

  getAllEmployees1(): Observable<Employee[]> {
    let empModifedData: Employee[] = [];
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`).pipe(
      map((empData: Employee[]) => {
        for (let emp of empData) {
          empModifedData.push({
            ...emp,
            empName: `${emp.empName}_modifiedinmap`,
          });
        }
        return empData;
      })
    );
  }

  //get
  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
  }

  //delete
  deleteEmployee(empno: string): Observable<Employee> {
    return this.httpClient.delete<Employee>(
      `${this.baseURL}/employees/${empno}`
    );
  }

  //POST
  createEmployee(emp: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseURL}/employees`, emp);
  }

  //update put
  //localhost:6000/employees/id
  updateEmployee(updateEmp: Employee, id: string): Observable<Employee> {
    return this.httpClient.put<Employee>(
      `${this.baseURL}/employees/${id}`,
      updateEmp
    );
  }
}
