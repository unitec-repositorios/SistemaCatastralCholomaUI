import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrenajeSP } from '../models/drenaje-sp';

@Injectable({
  providedIn: 'root'
})
export class DrenajeSPService {
  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getDrenajeSPs() {
    return this.http.get(`${this.API_URL}/drenajeSP`);
  }
  
  getDrenajeSP(tipo: string) {
    return this.http.get(`${this.API_URL}/drenajeSP?tipo=${tipo}`)
  }

  saveDrenajeSP(drenajeSP: DrenajeSP) {
    return this.http.post(`${this.API_URL}/drenajeSP`, drenajeSP);
  }

  modifyDrenajeSP(drenajeSP: DrenajeSP) {
    return this.http.put(`${this.API_URL}/drenajeSP?old=${drenajeSP.tipo}`, drenajeSP);
  }

  deleteDrenajeSP(tipo: string) {
    return this.http.delete(`${this.API_URL}/drenajeSP?old=${tipo}`);
  }
}
