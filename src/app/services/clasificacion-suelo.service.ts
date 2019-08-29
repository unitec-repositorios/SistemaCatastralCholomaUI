import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ClasificacionSuelo} from '../models/clasificacion-suelo';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionSueloService {

  API_URL = '//catastrocholomaapi.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getClasificacionSuelos() {
    return this.http.get(`${this.API_URL}/ClasificacionSuelo`);
  }

  saveClasificacionSuelo(ClasificacionSuelo: ClasificacionSuelo){
    return this.http.post(`${this.API_URL}/ClasificacionSuelo`, ClasificacionSuelo);
  }

  getClasificacionSuelo(id: number) {
    return this.http.get(`${this.API_URL}/ClasificacionSuelo/${id}`)
  }

  modifyClasificacionSuelo(ClasificacionSuelo: ClasificacionSuelo) {
    return this.http.put(`${this.API_URL}/ClasificacionSuelo/${ClasificacionSuelo.codigo}`, ClasificacionSuelo);
  }

  deleteClasificacionSuelo(id: number) {
    return this.http.delete(`${this.API_URL}/ClasificacionSuelo/${id}`);
  }
}
