import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CaracteristicasVecindad} from '../models/caracteristicas-vecindad';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicasVecindadService {

  API_URL = '//catastrocholomaapi.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

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
