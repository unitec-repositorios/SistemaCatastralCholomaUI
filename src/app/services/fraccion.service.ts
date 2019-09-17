import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Fraccion} from '../models/fraccion';

@Injectable({
  providedIn: 'root'
})
export class FraccionService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getFracciones() {
    return this.http.get(`${this.API_URL}/Fraccion`);
  }

  saveFraccion(Fraccion: Fraccion){
    return this.http.post(`${this.API_URL}/Fraccion`, Fraccion);
  }

  getFraccion(id: number) {
    return this.http.get(`${this.API_URL}/Fraccion/${id}`)
  }

  modifyFraccion(Fraccion: Fraccion) {
    return this.http.put(`${this.API_URL}/Fraccion/${Fraccion.idfraccion}`, Fraccion);
  }

  deleteFraccion(id: number) {
    return this.http.delete(`${this.API_URL}/Fraccion/${id}`);
  }
}
