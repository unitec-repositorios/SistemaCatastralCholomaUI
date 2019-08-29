import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  username: string;
  type: number; //1 if it is an admin user, otherwise 0

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.username = this.cookieService.get('username');
    this.type = +this.cookieService.get('type');
  }

}
