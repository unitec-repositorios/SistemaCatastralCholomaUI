import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElectricidadSP } from '../models/electricidad-sp';

@Injectable({
  providedIn: 'root'
})
export class ElectricidadSPService {
  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

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
