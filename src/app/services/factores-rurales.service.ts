import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FactoresRurales} from '../models/factores-rurales';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class FactoresRuralesService {

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

  getFactoresRurales() {
    return this.http.get(`${this.API_URL}/FactoresRurales`);
  }

  saveFactoresRurales(FactoresRurales: FactoresRurales){
    return this.http.post(`${this.API_URL}/FactoresRurales`, FactoresRurales);
  }

  getFactoresRural(id: string) {
    return this.http.get(`${this.API_URL}/FactoresRurales/${id}`)
  }

  modifyFactoresRurales(FactoresRurales: FactoresRurales) {
    return this.http.put(`${this.API_URL}/FactoresRurales/${FactoresRurales.idFactoresRurales}`, FactoresRurales);
  }

  deleteFactoresRurales(id: string) {
    return this.http.delete(`${this.API_URL}/FactoresRurales/${id}`);
  }
}
