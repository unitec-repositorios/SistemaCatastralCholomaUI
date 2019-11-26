import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AguaSP } from '../models/agua-sp';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class AguaSPService {
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

  getAguaSPs() {
    return this.http.get(`${this.API_URL}/aguaSP`);
  }
  
  getAguaSP(tipo: string) {
    return this.http.get(`${this.API_URL}/aguaSP?tipo=${tipo}`)
  }

  saveAguaSP(aguaSP: AguaSP) {
    return this.http.post(`${this.API_URL}/aguaSP`, aguaSP);
  }

  modifyAguaSP(aguaSP: AguaSP) {
    return this.http.put(`${this.API_URL}/aguaSP?old=${aguaSP.tipo}`, aguaSP);
  }

  deleteAguaSP(tipo: string) {
    return this.http.delete(`${this.API_URL}/aguaSP?old=${tipo}`);
  }
}
