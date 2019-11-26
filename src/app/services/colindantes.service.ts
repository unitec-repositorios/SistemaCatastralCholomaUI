import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Colindantes} from '../models/colindantes';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class ColindantesService {

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

  getColindantes() {
    return this.http.get(`${this.API_URL}/Colindantes`);
  }

  saveColindantes(Colindantes: Colindantes){
    return this.http.post(`${this.API_URL}/Colindantes`, Colindantes);
  }

  getColindante(id: string) {
    return this.http.get(`${this.API_URL}/Colindantes/${id}`)
  }

  modifyColindantes(Colindantes: Colindantes) {
    return this.http.put(`${this.API_URL}/Colindantes/${Colindantes.idcolindantes}`, Colindantes);
  }

  deleteColindantes(id: string) {
    return this.http.delete(`${this.API_URL}/Colindantes/${id}`);
  }
}
