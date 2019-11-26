import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AvaluoRural} from "../models/avaluo-rural";

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class AvaluoRuralService {

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

  getAvaluoRurales() {
    return this.http.get(`${this.API_URL}/AvaluoRural`);
  }

  saveAvaluoRural(avaR: AvaluoRural){
    return this.http.post(`${this.API_URL}/AvaluoRural`, avaR);
  }

  getAvaluoRural(id: string) {
    return this.http.get(`${this.API_URL}/AvaluoRural/${id}`)
  }

  modifyAvaluoRural(avaR: AvaluoRural) {
    return this.http.put(`${this.API_URL}/AvaluoRural/${avaR.idavaluorural}`, avaR);
  }

  deleteAvaluoRural(id: string) {
    return this.http.delete(`${this.API_URL}/AvaluoRural/${id}`);
  }
}
