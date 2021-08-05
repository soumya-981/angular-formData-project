import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { EmployeeDataComponent } from './EmployeeData/employee-data.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent,EmployeeComponent,EmployeeDataComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
