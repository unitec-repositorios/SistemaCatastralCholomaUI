import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Piso} from '../models/piso';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class PisoService {

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
