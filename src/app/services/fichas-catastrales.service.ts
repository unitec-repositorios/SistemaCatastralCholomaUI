import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FichaCatastral } from '../models/ficha-catastral';

@Injectable({
  providedIn: 'root'
})
export class FichasCatastralesService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getFichaCatastrales() {
    return this.http.get(`${this.API_URL}/FichaCatastral`);
  }

  saveFichaCatastral(FichaCatastral: FichaCatastral){
    return this.http.post(`${this.API_URL}/FichaCatastral`, FichaCatastral);
  }

  getFichaCatastral(id: string) {
    return this.http.get(`${this.API_URL}/FichaCatastral/${id}`)
  }

  modifyFichaCatastral(FichaCatastral: FichaCatastral) {
    return this.http.put(`${this.API_URL}/FichaCatastral/${FichaCatastral.cocata}`, FichaCatastral);
  }

  deleteFichaCatastral(id: string) {
    return this.http.delete(`${this.API_URL}/FichaCatastral/${id}`);
  }
}
