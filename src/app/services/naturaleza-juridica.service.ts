import { Injectable } from '@angular/core';
import { NaturalezaJuridica } from '../models/naturaleza-juridica';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NaturalezaJuridicaService {


  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

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
    return this.http.put(`${this.API_URL}/naturalezaJuridica?old=${naturaleza.tipo}`, naturaleza);
  }

  deleteNaturalezaJuridica(tipo: string) {
    return this.http.delete(`${this.API_URL}/naturalezaJuridica?old=${tipo}`);
  }
}
