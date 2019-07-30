import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URL = 'http://catastrocholomaapi.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.API_URL}/Usuario`);
  }

  getUser(id: string) {
    return this.http.get(`${this.API_URL}/Usuario?nomb=${id}`);
  }
}
