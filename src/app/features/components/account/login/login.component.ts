import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user: any = {};

  onSubmit(a :any) {
    alert('SUCCESS!! :-)\n\n' + a + 'test' + JSON.stringify(this.user))
  }

}
