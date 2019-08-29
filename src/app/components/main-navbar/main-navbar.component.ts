import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  role: number;

  constructor(private authService: AuthService, private router: Router,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.role = +this.cookieService.get('type');
  }

  logout(): void {
    //this.authService.logout();
    this.router.navigate(['login']);
  }

}
