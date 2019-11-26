import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Propiedad} from '../models/propiedad';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

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

  getPropiedades() {
    return this.http.get(`${this.API_URL}/Propiedad`);
  }

  savePropiedad(Propiedad: Propiedad){
    return this.http.post(`${this.API_URL}/Propiedad`, Propiedad);
  }

  getPropiedad(id: string) {
    return this.http.get(`${this.API_URL}/Propiedad/${id}`)
  }

  modifyPropiedad(Propiedad: Propiedad) {
    return this.http.put(`${this.API_URL}/Propiedad/${Propiedad.claveCatastral}`, Propiedad);
  }

  deletePropiedad(id: string) {
    return this.http.delete(`${this.API_URL}/Propiedad/${id}`);
  }
}
