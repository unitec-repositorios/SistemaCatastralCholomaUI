import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CaracteristicasPropiedad} from '../models/caracteristicas-propiedad';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class CaracteristicasPropiedadService {

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

  getCaracteristicasPropiedades() {
    return this.http.get(`${this.API_URL}/CaracteristicasPropiedad`);
  }

  saveCaracteristicasPropiedad(CaracteristicasPropiedad: CaracteristicasPropiedad){
    return this.http.post(`${this.API_URL}/CaracteristicasPropiedad`, CaracteristicasPropiedad);
  }

  getCaracteristicasPropiedad(id: string) {
    return this.http.get(`${this.API_URL}/CaracteristicasPropiedad/${id}`)
  }

  modifyCaracteristicasPropiedad(CaracteristicasPropiedad: CaracteristicasPropiedad) {
    return this.http.put(`${this.API_URL}/CaracteristicasPropiedad/${CaracteristicasPropiedad.idcaracRural}`, CaracteristicasPropiedad);
  }

  deleteCaracteristicasPropiedad(id: string) {
    return this.http.delete(`${this.API_URL}/CaracteristicasPropiedad/${id}`);
  }
}
