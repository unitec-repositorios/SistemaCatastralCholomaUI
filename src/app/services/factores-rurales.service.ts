import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FactoresRurales} from '../models/factores-rurales';

@Injectable({
  providedIn: 'root'
})
export class FactoresRuralesService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getFactoresRurales() {
    return this.http.get(`${this.API_URL}/FactoresRurales`);
  }

  saveFactoresRurales(FactoresRurales: FactoresRurales){
    return this.http.post(`${this.API_URL}/FactoresRurales`, FactoresRurales);
  }

  getFactoresRural(id: string) {
    return this.http.get(`${this.API_URL}/FactoresRurales/${id}`)
  }

  modifyFactoresRurales(FactoresRurales: FactoresRurales) {
    return this.http.put(`${this.API_URL}/FactoresRurales/${FactoresRurales.idFactoresRurales}`, FactoresRurales);
  }

  deleteFactoresRurales(id: string) {
    return this.http.delete(`${this.API_URL}/FactoresRurales/${id}`);
  }
}
