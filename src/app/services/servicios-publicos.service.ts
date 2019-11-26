import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServiciosPublicos} from '../models/servicios-publicos';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class ServiciosPublicosService {

   API_URL = "Err";

  constructor(private http: HttpClient) { 
    let app = new AppConfigService(http);
    app.load().then((resolve: string) => {
      this.API_URL = resolve;
      //console.log(this.API_URL)
    }).catch(()=>{
      console.log("error...");
    })
  }

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
