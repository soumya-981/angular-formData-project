import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  constructor(private _user: UserService) {}

  myForm: FormGroup;
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {

    this._user.employee ={...this.myForm.value};
    console.log('Your form data : ', this.myForm.value);
  }
}
