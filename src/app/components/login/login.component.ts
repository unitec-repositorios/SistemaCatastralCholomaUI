import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private usersService: UsuariosService) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    
    this.usersService.getUser(this.username)
      .subscribe(
        res => {
          console.log(res);
          let user: any = res;
          if(user.nombre == this.username && user.password == this.password) {
            this.router.navigate(['modules']);
          }
          else {
            alert('Usuario y/o contraseña incorrectos');
          }
        },
        err => {
          console.log(err);
        }
      )
    /*  
    if(this.username == 'Ad' && this.password == '1234') {
      this.router.navigate(['modules']);
    }
    else {
      alert('Usuario y/o contraseña incorrectos');
    }
    */
  }

}
