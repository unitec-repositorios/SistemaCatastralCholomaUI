import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalleSP } from '../models/calle-sp';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class CalleSPService {
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

  getCalleSPs() {
    return this.http.get(`${this.API_URL}/calleSP`);
  }
  
  getCalleSP(tipo: string) {
    return this.http.get(`${this.API_URL}/calleSP?tipo=${tipo}`)
  }

  saveCalleSP(calleSP: CalleSP) {
    return this.http.post(`${this.API_URL}/calleSP`, calleSP);
  }

  modifyCalleSP(calleSP: CalleSP) {
    return this.http.put(`${this.API_URL}/calleSP?old=${calleSP.tipo}`, calleSP);
  }

  deleteCalleSP(tipo: string) {
    return this.http.delete(`${this.API_URL}/calleSP?old=${tipo}`);
  }
}
