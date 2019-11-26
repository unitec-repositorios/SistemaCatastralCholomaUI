import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Negocios} from '../models/negocios';

import { AppConfigService } from '../services/app-config.service' 

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

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
