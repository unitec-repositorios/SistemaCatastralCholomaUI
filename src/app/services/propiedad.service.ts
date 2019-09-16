import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Propiedad} from '../models/propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getPropiedades() {
    return this.http.get(`${this.API_URL}/Propiedad`);
  }

  savePropiedad(Propiedad: Propiedad){
    return this.http.post(`${this.API_URL}/Propiedad`, Propiedad);
  }

  getPropiedad(id: string) {
    return this.http.get(`${this.API_URL}/Propiedad/${id}`)
  }

  modifyPropiedad(Propiedad: Propiedad) {
    return this.http.put(`${this.API_URL}/Propiedad/${Propiedad.claveCatastral}`, Propiedad);
  }

  deletePropiedad(id: string) {
    return this.http.delete(`${this.API_URL}/Propiedad/${id}`);
  }
}
