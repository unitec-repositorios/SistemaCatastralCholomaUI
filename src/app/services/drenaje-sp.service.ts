import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrenajeSP } from '../models/drenaje-sp';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class DrenajeSPService {
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

  getDrenajeSPs() {
    return this.http.get(`${this.API_URL}/drenajeSP`);
  }
  
  getDrenajeSP(tipo: string) {
    return this.http.get(`${this.API_URL}/drenajeSP?tipo=${tipo}`)
  }

  saveDrenajeSP(drenajeSP: DrenajeSP) {
    return this.http.post(`${this.API_URL}/drenajeSP`, drenajeSP);
  }

  modifyDrenajeSP(drenajeSP: DrenajeSP) {
    return this.http.put(`${this.API_URL}/drenajeSP?old=${drenajeSP.tipo}`, drenajeSP);
  }

  deleteDrenajeSP(tipo: string) {
    return this.http.delete(`${this.API_URL}/drenajeSP?old=${tipo}`);
  }
}
