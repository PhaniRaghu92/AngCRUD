import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from '../components/employeelist/employeelist.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { CreateEmployeeComponent } from '../components/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { CtaDirective } from '../customDirectives/cta.directive';
import { CButtonDirective } from '../customDirectives/c-button.directive';
import { TempConverterPipe } from '../custompipes/temp-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    CreateEmployeeComponent,
    CButtonDirective,
    CtaDirective,
    TempConverterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
