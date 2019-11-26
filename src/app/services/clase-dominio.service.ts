import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ClaseDominio}from '../models/clase-dominio';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class ClaseDominioService {

  
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

  getClasesDominios() {
    return this.http.get(`${this.API_URL}/claseDominio`);
  }

  saveClaseDominio(clasedominio: ClaseDominio) {
    return this.http.post(`${this.API_URL}/claseDominio`, clasedominio);
  }

  getClaseDominio(tipo: string) {
    return this.http.get(`${this.API_URL}/claseDominio?tipo=${tipo}`)
  }

  modifyClaseDominio(clasedominio: ClaseDominio) {
    return this.http.put(`${this.API_URL}/claseDominio?old=${clasedominio.tipoDominio}`, clasedominio);
  }

  deleteClaseDominio(tipo: string) {
    return this.http.delete(`${this.API_URL}/claseDominio?old=${tipo}`);
  }
}
