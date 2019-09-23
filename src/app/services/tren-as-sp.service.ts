import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrenAsSP } from '../models/tren-as-sp';

@Injectable({
  providedIn: 'root'
})
export class TrenAsSPService {
  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getTrenAsSPs() {
    return this.http.get(`${this.API_URL}/trenAsSP`);
  }
  
  getTrenAsSP(tipo: string) {
    return this.http.get(`${this.API_URL}/trenAsSP?tipo=${tipo}`)
  }

  saveTrenAsSP(trenAsSP: TrenAsSP) {
    return this.http.post(`${this.API_URL}/trenAsSP`, trenAsSP);
  }

  modifyTrenAsSP(trenAsSP: TrenAsSP) {
    return this.http.put(`${this.API_URL}/trenAsSP?old=${trenAsSP.tipo}`, trenAsSP);
  }

  deleteTrenAsSP(tipo: string) {
    return this.http.delete(`${this.API_URL}/trenAsSP?old=${tipo}`);
  }
}
