import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Propietario } from '../models/propietario';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

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

  getPropietarios() {
    return this.http.get(`${this.API_URL}/Propietario`);
  }

  savePropietario(propietario: Propietario) {
    return this.http.post(`${this.API_URL}/Propietario`, propietario);
  }

  getPropietario(id: number) {
    return this.http.get(`${this.API_URL}/Propietario/${id}`)
  }

  modifyPropietario(propietario: Propietario) {
    return this.http.put(`${this.API_URL}/Propietario/${propietario.id}`, propietario);
  }

  deletePropietario(id: number) {
    return this.http.delete(`${this.API_URL}/Propietario/${id}`);
  }
}
