import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrenAsSP } from '../models/tren-as-sp';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class TrenAsSPService {
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

  getTrenAsSPs() {
    return this.http.get(`${this.API_URL}/trenAsSP`);
  }
  
  getTrenAsSP(tipo: string) {
    return this.http.get(`${this.API_URL}/trenAsSP?tipo=${tipo}`)
  }

  saveTrenAsSP(trenAsSP: TrenAsSP) {
    return this.http.post(`${this.API_URL}/trenAsSP`, trenAsSP);
  }

  modifyTrenAsSP(trenAsSP: TrenAsSP) {
    return this.http.put(`${this.API_URL}/trenAsSP?old=${trenAsSP.tipo}`, trenAsSP);
  }

  deleteTrenAsSP(tipo: string) {
    return this.http.delete(`${this.API_URL}/trenAsSP?old=${tipo}`);
  }
}
