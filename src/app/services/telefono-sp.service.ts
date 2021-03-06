import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TelefonoSP } from '../models/telefono-sp';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class TelefonoSPService {
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

  getTelefonoSPs() {
    return this.http.get(`${this.API_URL}/telefonoSP`);
  }
  
  getTelefonoSP(tipo: string) {
    return this.http.get(`${this.API_URL}/telefonoSP?tipo=${tipo}`)
  }

  saveTelefonoSP(telefonoSP: TelefonoSP) {
    return this.http.post(`${this.API_URL}/telefonoSP`, telefonoSP);
  }

  modifyTelefonoSP(telefonoSP: TelefonoSP) {
    return this.http.put(`${this.API_URL}/telefonoSP?old=${telefonoSP.tipo}`, telefonoSP);
  }

  deleteTelefonoSP(tipo: string) {
    return this.http.delete(`${this.API_URL}/telefonoSP?old=${tipo}`);
  }
}
