import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CaracteristicasVecindad} from '../models/caracteristicas-vecindad';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class CaracteristicasVecindadService {

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

  getCaracteristicasVecindades() {
    return this.http.get(`${this.API_URL}/CaracteristicasVecindad`);
  }

  saveCaracteristicasVecindad(CaracteristicasVecindad: CaracteristicasVecindad){
    return this.http.post(`${this.API_URL}/CaracteristicasVecindad`, CaracteristicasVecindad);
  }

  getCaracteristicasVecindad(id: string) {
    return this.http.get(`${this.API_URL}/CaracteristicasVecindad/${id}`)
  }

  modifyCaracteristicasVecindad(CaracteristicasVecindad: CaracteristicasVecindad) {
    return this.http.put(`${this.API_URL}/CaracteristicasVecindad/${CaracteristicasVecindad.idcaracteristicasvecindad}`, CaracteristicasVecindad);
  }

  deleteCaracteristicasVecindad(id: string) {
    return this.http.delete(`${this.API_URL}/CaracteristicasVecindad/${id}`);
  }
}
