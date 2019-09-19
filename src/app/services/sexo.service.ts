import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Sexo}from '../models/sexo'
@Injectable({
  providedIn: 'root'
})
export class SexoService {


  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getSexos() {
    return this.http.get(`${this.API_URL}/sexo`);
  }

  saveSexo(sexo: Sexo) {
    return this.http.post(`${this.API_URL}/sexo`, sexo);
  }

  getSexo(tipo: string) {
    return this.http.get(`${this.API_URL}/sexo/${tipo}`)
  }

  modifySexo(sexo: Sexo) {
    return this.http.put(`${this.API_URL}/sexo/${sexo.tipo}`, sexo);
  }

  deleteSexo(tipo: string) {
    return this.http.delete(`${this.API_URL}/sexo/${tipo}`);
  }
}
