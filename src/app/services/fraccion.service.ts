import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Fraccion} from '../models/fraccion';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class FraccionService {

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
