import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServiciosPublicos} from '../models/servicios-publicos';

@Injectable({
  providedIn: 'root'
})
export class ServiciosPublicosService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getServiciosPublicos() {
    return this.http.get(`${this.API_URL}/ServiciosPublicos`);
  }

  saveServiciosPublicos(ServiciosPublicos: ServiciosPublicos){
    return this.http.post(`${this.API_URL}/ServiciosPublicos`, ServiciosPublicos);
  }

  getServiciosPublico(id: number) {
    return this.http.get(`${this.API_URL}/ServiciosPublicos/${id}`)
  }

  modifyServiciosPublicos(ServiciosPublicos: ServiciosPublicos) {
    return this.http.put(`${this.API_URL}/ServiciosPublicos/${ServiciosPublicos.idserviciospublicos}`, ServiciosPublicos);
  }

  deleteServiciosPublicos(id: number) {
    return this.http.delete(`${this.API_URL}/ServiciosPublicos/${id}`);
  }
}
