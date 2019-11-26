import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsoTierra} from '../models/uso-tierra'

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class UsoTierraService {

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

  getUsoTierras() {
    return this.http.get(`${this.API_URL}/UsoTierra`);
  }

  saveUsoTierra(UsoTierra: UsoTierra){
    return this.http.post(`${this.API_URL}/UsoTierra`, UsoTierra);
  }

  getUsoTierra(id: number) {
    return this.http.get(`${this.API_URL}/UsoTierra/${id}`)
  }

  modifyUsoTierra(UsoTierra: UsoTierra) {
    return this.http.put(`${this.API_URL}/UsoTierra/${UsoTierra.idusotierra}`, UsoTierra);
  }

  deleteUsoTierra(id: number) {
    return this.http.delete(`${this.API_URL}/UsoTierra/${id}`);
  }
}
