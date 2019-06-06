import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private empleadosService: EmpleadosService) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    
    this.empleadosService.getEmpleado(this.username)
      .subscribe(
        res => {
          console.log(res);
          let user: any = res;
          if( user.nombre == this.username && user.password == this.password ) {
            this.router.navigate(['modules']);
          }
          else {
            alert('Usuario y/o contraseña incorrectos');
          }
        },
        err => {
          console.log(err);
          alert('Usuario y/o contraseña incorrectos');
        }
      )
  }

}
