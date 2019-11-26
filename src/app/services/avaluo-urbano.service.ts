import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AvaluoUrbano} from "../models/avaluo-urbano";

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class AvaluoUrbanoService {

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
