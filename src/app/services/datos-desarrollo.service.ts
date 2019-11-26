import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatosDesarrollo} from '../models/datos-desarrollo';

import { AppConfigService } from '../services/app-config.service' 

@Injectable({
  providedIn: 'root'
})
export class DatosDesarrolloService {

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

  getDatosDesarrollos() {
    return this.http.get(`${this.API_URL}/DatosDesarrollo`);
  }

  saveDatosDesarrollo(DatosDesarrollo: DatosDesarrollo){
    return this.http.post(`${this.API_URL}/DatosDesarrollo`, DatosDesarrollo);
  }

  getDatosDesarrollo(id: string) {
    return this.http.get(`${this.API_URL}/DatosDesarrollo/${id}`)
  }

  modifyDatosDesarrollo(DatosDesarrollo: DatosDesarrollo) {
    return this.http.put(`${this.API_URL}/DatosDesarrollo/${DatosDesarrollo.iddatosdesarrollo}`, DatosDesarrollo);
  }

  deleteDatosDesarrollo(id: string) {
    return this.http.delete(`${this.API_URL}/DatosDesarrollo/${id}`);
  }
}
