import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private empleadosService: EmpleadosService,
    private authService: AuthService) { }

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
            //this.authService.login();
            this.router.navigate(['modules']);
            //this.message = 'Trying to log in ...';

            /*
            this.authService.login().subscribe(() => {
            //this.setMessage();
              if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/modules';
  
                // Redirect the user
                this.router.navigateByUrl(redirect);
                }
              else {
                alert('Error haciendo el routing');
              }
            });
            */
          }
          else {
            alert('Usuario y/o contraseña incorrectos');
          }
        },
        err => {
          console.log(err);
          alert('Error ');
        }
      )
  }
}