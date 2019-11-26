import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElectricidadSP } from '../models/electricidad-sp';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class ElectricidadSPService {
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

  getElectricidadSPs() {
    return this.http.get(`${this.API_URL}/electricidadSP`);
  }
  
  getElectricidadSP(tipo: string) {
    return this.http.get(`${this.API_URL}/electricidadSP?tipo=${tipo}`)
  }

  saveElectricidadSP(electricidadSP: ElectricidadSP) {
    return this.http.post(`${this.API_URL}/electricidadSP`, electricidadSP);
  }

  modifyElectricidadSP(electricidadSP: ElectricidadSP) {
    return this.http.put(`${this.API_URL}/electricidadSP?old=${electricidadSP.tipo}`, electricidadSP);
  }

  deleteElectricidadSP(tipo: string) {
    return this.http.delete(`${this.API_URL}/electricidadSP?old=${tipo}`);
  }
}
