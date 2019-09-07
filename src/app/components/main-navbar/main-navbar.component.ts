import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Roles } from '../../models/empleado';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  role: number;
  allPrivileges: boolean;
  roleEnum: Roles

  constructor(private authService: AuthService, private router: Router,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.role = +this.cookieService.get('type');
    if(this.role === Roles.Jefatura || this.role === Roles.SupervisorMantenimiento
    || this.role === Roles.SupervisorDigitacion) 
      this.allPrivileges = true;
    else
      this.allPrivileges = false;
  }

  logout(): void {
    //this.authService.logout();
    this.router.navigate(['login']);
  }

}
