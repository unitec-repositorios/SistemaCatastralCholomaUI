import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatosDesarrollo} from '../models/datos-desarrollo';

@Injectable({
  providedIn: 'root'
})
export class DatosDesarrolloService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getDatosDesarrollos() {
    return this.http.get(`${this.API_URL}/DatosDesarrollo`);
  }

  saveDatosDesarrollo(DatosDesarrollo: DatosDesarrollo){
    return this.http.post(`${this.API_URL}/DatosDesarrollo`, DatosDesarrollo);
  }

  getDatosDesarrollo(id: string) {
    return this.http.get(`${this.API_URL}/DatosDesarrollo/${id}`)
  }

  modifyDatosDesarrollo(DatosDesarrollo: DatosDesarrollo) {
    return this.http.put(`${this.API_URL}/DatosDesarrollo/${DatosDesarrollo.iddatosdesarrollo}`, DatosDesarrollo);
  }

  deleteDatosDesarrollo(id: string) {
    return this.http.delete(`${this.API_URL}/DatosDesarrollo/${id}`);
  }
}
