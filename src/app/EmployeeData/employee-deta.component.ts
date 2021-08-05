import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: [ './employee-data.component.scss' ]
})
export class EmployeeDataComponent implements OnInit {
 
  constructor(private _user: UserService) {}
  employeeData = {};
  userData = [];
  ngOnInit() {
  this.employeeData = this._user.employee;
  console.log("inside employeeData", this.employeeData);
  this._user.methodCall().subscribe(productdata => this.userData = productdata);
  }
   
}
