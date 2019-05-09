import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FichaCatastral } from '../models/ficha-catastral';

@Injectable({
  providedIn: 'root'
})
export class FichasCatastralesService {

  API_URL = 'http://localhost:53791/api';

  constructor(private http: HttpClient) { }

  saveFicha(ficha: FichaCatastral) {
    return this.http.post(`${this.API_URL}/FichaCatastral`, ficha);
  }
}
