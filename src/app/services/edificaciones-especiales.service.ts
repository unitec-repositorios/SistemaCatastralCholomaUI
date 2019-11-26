import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EdificacionesEspeciales} from '../models/edificaciones-especiales';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class EdificacionesEspecialesService {

   API_URL = "Err";

  constructor(private http: HttpClient) { 
    let app = new AppConfigService(http);
    app.load().then((resolve: string) => {
      this.API_URL = resolve;
      //console.log(this.API_URL)
    }).catch(()=>{
      console.log("error...");
    })
  }

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
