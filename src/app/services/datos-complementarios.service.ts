import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatosComplementarios} from '../models/datos-complementarios';

@Injectable({
  providedIn: 'root'
})
export class DatosComplementariosService {

  API_URL = '//catastrocholomaapi.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getDatosComplementarios() {
    return this.http.get(`${this.API_URL}/DatosComplementarios`);
  }

  saveDatosComplementarios(DatosComplementarios: DatosComplementarios){
    return this.http.post(`${this.API_URL}/DatosComplementarios`, DatosComplementarios);
  }

  getDatosComplementario(id: string) {
    return this.http.get(`${this.API_URL}/DatosComplementarios/${id}`)
  }

  modifyDatosComplementarios(DatosComplementarios: DatosComplementarios) {
    return this.http.put(`${this.API_URL}/DatosComplementarios/${DatosComplementarios.idClaveCatastral}`, DatosComplementarios);
  }

  deleteDatosComplementarios(id: string) {
    return this.http.delete(`${this.API_URL}/DatosComplementarios/${id}`);
  }
}
