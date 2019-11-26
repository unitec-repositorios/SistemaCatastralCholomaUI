import { Injectable } from '@angular/core';
import { UnidadArea } from '../models/unidad-area';
import { HttpClient } from '@angular/common/http';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class UnidadAreaService {

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

  getAreas() {
    return this.http.get(`${this.API_URL}/unidadArea`);
  }

  saveUnidadArea(unidadArea: UnidadArea) {
    return this.http.post(`${this.API_URL}/unidadArea`, unidadArea);
  }

  getUnidadArea(area: string) {
    return this.http.get(`${this.API_URL}/unidadArea?area=${area}`)
  }

  modifyUnidadArea(unidadArea: UnidadArea) {
    return this.http.put(`${this.API_URL}/unidadArea?old=${unidadArea.area}`, unidadArea);
  }

  deleteUnidadArea(area: string) {
    return this.http.delete(`${this.API_URL}/tipoDocumento?old=${area}`);
  }
}
