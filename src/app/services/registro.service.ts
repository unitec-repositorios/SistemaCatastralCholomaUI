import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Registro}from '../models/registro'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getRegistros() {
    return this.http.get(`${this.API_URL}/registro`);
  }

  saveRegistro(registro: Registro) {
    return this.http.post(`${this.API_URL}/registro`, registro);
  }

  getRegistro(tipo: string) {
    return this.http.get(`${this.API_URL}/registro?tipo=${tipo}`)
  }

  modifyRegistro(registro: Registro) {
    return this.http.put(`${this.API_URL}/registro?old=${registro.tipo}`, registro);
  }

  deleteRegistro(tipo: string) {
    return this.http.delete(`${this.API_URL}/registro?old=${tipo}`);
  }

}
