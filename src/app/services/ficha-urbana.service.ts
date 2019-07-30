import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FichaUrbana } from '../models/ficha-urbana';

@Injectable({
  providedIn: 'root'
})
export class FichaUrbanaService {

  API_URL = 'http://catastrocholomaapi.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  saveFicha(ficha: FichaUrbana) {
    return this.http.post(`${this.API_URL}/FichaUrbana`, ficha);
  }
}
