import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetallesAdicionales } from '../models/detalles-adicionales';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class DetallesAdicionalesService {

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

  getDetallesAdicionales() {
    return this.http.get(`${this.API_URL}/DetallesAdicionales`);
  }

  saveDetallesAdicionales(DetallesAdicionales: DetallesAdicionales){
    return this.http.post(`${this.API_URL}/DetallesAdicionales`, DetallesAdicionales);
  }

  getDetallesAdicional(id: string) {
    return this.http.get(`${this.API_URL}/DetallesAdicionales/${id}`)
  }

  modifyDetallesAdicionales(DetallesAdicionales: DetallesAdicionales) {
    return this.http.put(`${this.API_URL}/DetallesAdicionales/${DetallesAdicionales.idClaveCatastral}`, DetallesAdicionales);
  }

  deleteDetallesAdicionales(id: string) {
    return this.http.delete(`${this.API_URL}/DetallesAdicionales/${id}`);
  }
}
