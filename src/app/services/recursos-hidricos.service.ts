import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RecursosHidricos} from '../models/recursos-hidricos';

@Injectable({
  providedIn: 'root'
})
export class RecursosHidricosService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getRecursosHidricos() {
    return this.http.get(`${this.API_URL}/RecursosHidricos`);
  }

  saveRecursosHidricos(RecursosHidricos: RecursosHidricos){
    return this.http.post(`${this.API_URL}/RecursosHidricos`, RecursosHidricos);
  }

  getRecursosHidrico(id: number) {
    return this.http.get(`${this.API_URL}/RecursosHidricos/${id}`)
  }

  modifyRecursosHidricos(RecursosHidricos: RecursosHidricos) {
    return this.http.put(`${this.API_URL}/RecursosHidricos/${RecursosHidricos.idrecursoshidricos}`, RecursosHidricos);
  }

  deleteRecursosHidricos(id: number) {
    return this.http.delete(`${this.API_URL}/RecursosHidricos/${id}`);
  }
}
