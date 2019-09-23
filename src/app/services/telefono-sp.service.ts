import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TelefonoSP } from '../models/telefono-sp';

@Injectable({
  providedIn: 'root'
})
export class TelefonoSPService {
  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getTelefonoSPs() {
    return this.http.get(`${this.API_URL}/telefonoSP`);
  }
  
  getTelefonoSP(tipo: string) {
    return this.http.get(`${this.API_URL}/telefonoSP?tipo=${tipo}`)
  }

  saveTelefonoSP(telefonoSP: TelefonoSP) {
    return this.http.post(`${this.API_URL}/telefonoSP`, telefonoSP);
  }

  modifyTelefonoSP(telefonoSP: TelefonoSP) {
    return this.http.put(`${this.API_URL}/telefonoSP?old=${telefonoSP.tipo}`, telefonoSP);
  }

  deleteTelefonoSP(tipo: string) {
    return this.http.delete(`${this.API_URL}/telefonoSP?old=${tipo}`);
  }
}
