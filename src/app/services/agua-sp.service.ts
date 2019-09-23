import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AguaSP } from '../models/agua-sp';

@Injectable({
  providedIn: 'root'
})
export class AguaSPService {
  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getAguaSPs() {
    return this.http.get(`${this.API_URL}/aguaSP`);
  }
  
  getAguaSP(tipo: string) {
    return this.http.get(`${this.API_URL}/aguaSP?tipo=${tipo}`)
  }

  saveAguaSP(aguaSP: AguaSP) {
    return this.http.post(`${this.API_URL}/aguaSP`, aguaSP);
  }

  modifyAguaSP(aguaSP: AguaSP) {
    return this.http.put(`${this.API_URL}/aguaSP?old=${aguaSP.tipo}`, aguaSP);
  }

  deleteAguaSP(tipo: string) {
    return this.http.delete(`${this.API_URL}/aguaSP?old=${tipo}`);
  }
}
