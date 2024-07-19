import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from '../components/employeelist/employeelist.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { CreateEmployeeComponent } from '../components/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, EmployeelistComponent, CreateEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
