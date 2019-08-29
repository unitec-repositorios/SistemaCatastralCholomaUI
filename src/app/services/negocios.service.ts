import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Negocios} from '../models/negocios';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  API_URL = '//catastrocholomaapi.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getNegocios() {
    return this.http.get(`${this.API_URL}/Negocios`);
  }

  saveNegocios(Negocios: Negocios){
    return this.http.post(`${this.API_URL}/Negocios`, Negocios);
  }

  getNegocio(id: number) {
    return this.http.get(`${this.API_URL}/Negocios/${id}`)
  }

  modifyNegocios(Negocios: Negocios) {
    return this.http.put(`${this.API_URL}/Negocios/${Negocios.idnegocios}`, Negocios);
  }

  deleteNegocios(id: number) {
    return this.http.delete(`${this.API_URL}/Negocios/${id}`);
  }
}
