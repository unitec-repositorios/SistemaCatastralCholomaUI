import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AvaluoUrbano} from "../models/avaluo-urbano";

@Injectable({
  providedIn: 'root'
})
export class AvaluoUrbanoService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getAvaluoUrbanos() {
    return this.http.get(`${this.API_URL}/AvaluoUrbano`);
  }

  saveAvaluoUrbano(avaU: AvaluoUrbano){
    return this.http.post(`${this.API_URL}/AvaluoUrbano`, avaU);
  }

  getAvaluoUrbano(id: string) {
    return this.http.get(`${this.API_URL}/AvaluoUrbano/${id}`)
  }

  modifyAvaluoUrbano(avaU: AvaluoUrbano) {
    return this.http.put(`${this.API_URL}/AvaluoUrbano/${avaU.idavaluourbano}`, avaU);
  }

  deleteAvaluoUrbano(id: string) {
    return this.http.delete(`${this.API_URL}/AvaluoUrbano/${id}`);
  }
}
