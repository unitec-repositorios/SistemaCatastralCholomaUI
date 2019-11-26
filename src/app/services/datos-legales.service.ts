import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatosLegales} from '../models/datos-legales';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class DatosLegalesService {

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

  getDatosLegales() {
    return this.http.get(`${this.API_URL}/DatosLegales`);
  }

  saveDatosLegales(DatosLegales: DatosLegales){
    return this.http.post(`${this.API_URL}/DatosLegales`, DatosLegales);
  }

  getDatosLegal(id: string) {
    return this.http.get(`${this.API_URL}/DatosLegales/${id}`)
  }

  modifyDatosLegales(DatosLegales: DatosLegales) {
    return this.http.put(`${this.API_URL}/DatosLegales/${DatosLegales.idclaveCatastral}`, DatosLegales);
  }

  deleteDatosLegales(id: string) {
    return this.http.delete(`${this.API_URL}/DatosLegales/${id}`);
  }
}
