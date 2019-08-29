import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Piso} from '../models/piso';

@Injectable({
  providedIn: 'root'
})
export class PisoService {

  API_URL = '//catastrocholomaapi.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getPisos() {
    return this.http.get(`${this.API_URL}/Piso`);
  }

  savePiso(Piso: Piso){
    return this.http.post(`${this.API_URL}/Piso`, Piso);
  }

  getPiso(id: number) {
    return this.http.get(`${this.API_URL}/Piso/${id}`)
  }

  modifyPiso(Piso: Piso) {
    return this.http.put(`${this.API_URL}/Piso/${Piso.idpiso}`, Piso);
  }

  deletePiso(id: number) {
    return this.http.delete(`${this.API_URL}/Piso/${id}`);
  }
}
