import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Sexo}from '../models/sexo';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class SexoService {


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

  getSexos() {
    return this.http.get(`${this.API_URL}/sexo`);
  }

  saveSexo(sexo: Sexo) {
    return this.http.post(`${this.API_URL}/sexo`, sexo);
  }

  getSexo(tipo: string) {
    return this.http.get(`${this.API_URL}/sexo?tipo=${tipo}`)
  }

  modifySexo(sexo: Sexo) {
    return this.http.put(`${this.API_URL}/sexo?old=${sexo.tipo}`, sexo);
  }

  deleteSexo(tipo: string) {
    return this.http.delete(`${this.API_URL}/sexo?old=${tipo}`);
  }
}
