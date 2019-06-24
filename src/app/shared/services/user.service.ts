import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(protected http: HttpClient) {}

  getData() {
    let r  = Request;
    //return this.http.send(r);
  }

}