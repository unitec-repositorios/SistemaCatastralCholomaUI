import { Injectable } from '@angular/core';
import { UnidadArea } from '../models/unidad-area';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UnidadAreaService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getAreas() {
    return this.http.get(`${this.API_URL}/unidadArea`);
  }

  saveUnidadArea(unidadArea: UnidadArea) {
    return this.http.post(`${this.API_URL}/unidadArea`, unidadArea);
  }

  getUnidadArea(area: string) {
    return this.http.get(`${this.API_URL}/unidadArea?area=${area}`)
  }

  modifyUnidadArea(unidadArea: UnidadArea) {
    return this.http.put(`${this.API_URL}/unidadArea?old=${unidadArea.area}`, unidadArea);
  }

  deleteUnidadArea(area: string) {
    return this.http.delete(`${this.API_URL}/tipoDocumento?old=${area}`);
  }
}
