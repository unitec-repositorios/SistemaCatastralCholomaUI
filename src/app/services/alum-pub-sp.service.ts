import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlumPubSP } from '../models/alum-pub-sp';

@Injectable({
  providedIn: 'root'
})
export class AlumPubSPService {
  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getAlumPubSPs() {
    return this.http.get(`${this.API_URL}/alumPubSP`);
  }
  
  getAlumPubSP(tipo: string) {
    return this.http.get(`${this.API_URL}/alumPubSP?tipo=${tipo}`)
  }

  saveAlumPubSP(alumPubSP: AlumPubSP) {
    return this.http.post(`${this.API_URL}/alumPubSP`, alumPubSP);
  }

  modifyAlumPubSP(alumPubSP: AlumPubSP) {
    return this.http.put(`${this.API_URL}/alumPubSP?old=${alumPubSP.tipo}`, alumPubSP);
  }

  deleteAlumPubSP(tipo: string) {
    return this.http.delete(`${this.API_URL}/alumPubSP?old=${tipo}`);
  }
}
