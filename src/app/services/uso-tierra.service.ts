import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsoTierra} from '../models/uso-tierra'

@Injectable({
  providedIn: 'root'
})
export class UsoTierraService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getUsoTierras() {
    return this.http.get(`${this.API_URL}/UsoTierra`);
  }

  saveUsoTierra(UsoTierra: UsoTierra){
    return this.http.post(`${this.API_URL}/UsoTierra`, UsoTierra);
  }

  getUsoTierra(id: number) {
    return this.http.get(`${this.API_URL}/UsoTierra/${id}`)
  }

  modifyUsoTierra(UsoTierra: UsoTierra) {
    return this.http.put(`${this.API_URL}/UsoTierra/${UsoTierra.idusotierra}`, UsoTierra);
  }

  deleteUsoTierra(id: number) {
    return this.http.delete(`${this.API_URL}/UsoTierra/${id}`);
  }
}
