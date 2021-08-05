import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UserService {

  constructor(private _http: HttpClient) { }
  employee = {};
methodCall(): Observable<any> {
    return this._http.get("https://jsonplaceholder.typicode.com/users");
  }

}