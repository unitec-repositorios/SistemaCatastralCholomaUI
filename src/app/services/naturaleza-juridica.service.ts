import { Injectable } from '@angular/core';
import { NaturalezaJuridica } from '../models/naturaleza-juridica';
import { HttpClient } from '@angular/common/http';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class NaturalezaJuridicaService {


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

  getNaturalezasJuridicas() {
    return this.http.get(`${this.API_URL}/naturalezaJuridica`);
  }

  saveNaturalezaJuridica(naturaleza: NaturalezaJuridica) {
    return this.http.post(`${this.API_URL}/naturalezaJuridica`, naturaleza);
  }

  getNaturalezaJuridica(tipo: string) {
    return this.http.get(`${this.API_URL}/naturalezaJuridica?tipo=${tipo}`)
  }

  modifyNaturalezaJuridica(naturaleza: NaturalezaJuridica) {
    return this.http.put(`${this.API_URL}/naturalezaJuridica?old=${naturaleza.tipoNaturaleza}`, naturaleza);
  }

  deleteNaturalezaJuridica(tipo: string) {
    return this.http.delete(`${this.API_URL}/naturalezaJuridica?old=${tipo}`);
  }
}
