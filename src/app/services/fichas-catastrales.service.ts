import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FichaCatastral } from '../models/ficha-catastral';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class FichasCatastralesService {

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

  getFichaCatastrales() {
    return this.http.get(`${this.API_URL}/FichaCatastral`);
  }

  saveFichaCatastral(FichaCatastral: FichaCatastral){
    return this.http.post(`${this.API_URL}/FichaCatastral`, FichaCatastral);
  }

  getFichaCatastral(id: string) {
    return this.http.get(`${this.API_URL}/FichaCatastral/${id}`)
  }

  modifyFichaCatastral(FichaCatastral: FichaCatastral) {
    return this.http.put(`${this.API_URL}/FichaCatastral/${FichaCatastral.cocata}`, FichaCatastral);
  }

  deleteFichaCatastral(id: string) {
    return this.http.delete(`${this.API_URL}/FichaCatastral/${id}`);
  }
}
