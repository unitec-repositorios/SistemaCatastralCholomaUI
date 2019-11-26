import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Predio} from '../models/predio';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class PredioService {

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

  getPredios() {
    return this.http.get(`${this.API_URL}/Predio`);
  }

  savePredio(Predio: Predio){
    return this.http.post(`${this.API_URL}/Predio`, Predio);
  }

  getPredio(id: number) {
    return this.http.get(`${this.API_URL}/Predio/${id}`)
  }

  modifyPredio(Predio: Predio) {
    return this.http.put(`${this.API_URL}/Predio/${Predio.idPredio}`, Predio);
  }

  deletePredio(id: number) {
    return this.http.delete(`${this.API_URL}/Predio/${id}`);
  }
}
