import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EdificacionesEspeciales} from '../models/edificaciones-especiales';

@Injectable({
  providedIn: 'root'
})
export class EdificacionesEspecialesService {

  API_URL = '//catastrocholomaapi.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getEdificacionesEspeciales() {
    return this.http.get(`${this.API_URL}/EdificacionesEspeciales`);
  }

  saveEdificacionesEspeciales(EdificacionesEspeciales: EdificacionesEspeciales){
    return this.http.post(`${this.API_URL}/EdificacionesEspeciales`, EdificacionesEspeciales);
  }

  getEdificacionesEspecial(id: string) {
    return this.http.get(`${this.API_URL}/EdificacionesEspeciales/${id}`)
  }

  modifyEdificacionesEspeciales(EdificacionesEspeciales: EdificacionesEspeciales) {
    return this.http.put(`${this.API_URL}/EdificacionesEspeciales/${EdificacionesEspeciales.idedificacionesespeciales}`, EdificacionesEspeciales);
  }

  deleteEdificacionesEspeciales(id: string) {
    return this.http.delete(`${this.API_URL}/EdificacionesEspeciales/${id}`);
  }
}
