import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Registro}from '../models/registro'

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

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

  getRegistros() {
    return this.http.get(`${this.API_URL}/registro`);
  }

  saveRegistro(registro: Registro) {
    return this.http.post(`${this.API_URL}/registro`, registro);
  }

  getRegistro(tipo: string) {
    return this.http.get(`${this.API_URL}/registro?tipo=${tipo}`)
  }

  modifyRegistro(registro: Registro) {
    return this.http.put(`${this.API_URL}/registro?old=${registro.tipo}`, registro);
  }

  deleteRegistro(tipo: string) {
    return this.http.delete(`${this.API_URL}/registro?old=${tipo}`);
  }

}
