import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from '../components/employeelist/employeelist.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { CreateEmployeeComponent } from '../components/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { StudentlistComponent } from '../components/studentlist/studentlist.component';
import { CreateStudentComponent } from '../components/create-student/create-student.component';
import { StudentService } from '../services/student.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    CreateEmployeeComponent,
    StudentlistComponent,
    CreateStudentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [EmployeeService, StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
