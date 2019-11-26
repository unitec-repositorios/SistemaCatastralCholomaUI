import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AvaluoEdificaciones} from "../models/avaluo-edificaciones";

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class AvaluoEdificacionesService {

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

  getAvaluoEdificaciones() {
    return this.http.get(`${this.API_URL}/AvaluoEdificaciones`);
  }

  saveAvaluoEdificacion(ava: AvaluoEdificaciones){
    return this.http.post(`${this.API_URL}/AvaluoEdificaciones`, ava);
  }

  getAvaluoEdificacion(id: string) {
    return this.http.get(`${this.API_URL}/AvaluoEdificaciones/${id}`)
  }

  modifyAvaluoEdificacion(ava: AvaluoEdificaciones) {
    return this.http.put(`${this.API_URL}/AvaluoEdificaciones/${ava.idavaluoedificaciones}`, ava);
  }

  deleteAvaluoEdificacion(id: string) {
    return this.http.delete(`${this.API_URL}/AvaluoEdificaciones/${id}`);
  }
}
