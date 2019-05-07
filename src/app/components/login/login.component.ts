import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == '1234') {
      alert('Has iniciado');
    }
    else {
      alert('Usuario y/o contraseña ')
    }
  }

}
